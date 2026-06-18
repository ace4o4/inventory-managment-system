from sqlalchemy import Column, Integer, String, Float, Boolean, ForeignKey, DateTime, Enum
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
import enum
from .database import Base

class RoleEnum(str, enum.Enum):
    admin = "admin"
    staff = "staff"

class ShippingStatusEnum(str, enum.Enum):
    pending = "Pending"
    shipped = "Shipped"
    in_transit = "In-Transit"
    delivered = "Delivered"

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    role = Column(Enum(RoleEnum), default=RoleEnum.staff)

class InventoryItem(Base):
    __tablename__ = "inventory_items"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String)
    quantity = Column(Integer, default=0)
    price = Column(Float, default=0.0)
    cost = Column(Float, default=0.0)
    low_stock_threshold = Column(Integer, default=10)
    barcode = Column(String, unique=True, index=True)

    # Special Handling Tags
    is_cold_storage = Column(Boolean, default=False)
    temperature_req = Column(String, nullable=True) # e.g., "-20C"
    
    is_fragile = Column(Boolean, default=False)
    packaging_req = Column(String, nullable=True) # e.g., "Bubble Wrap"

    # Expiry
    expiry_date = Column(DateTime, nullable=True)

    # Timestamps
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationships
    shipping_orders = relationship("ShippingOrder", back_populates="item")

class ShippingOrder(Base):
    __tablename__ = "shipping_orders"

    id = Column(Integer, primary_key=True, index=True)
    item_id = Column(Integer, ForeignKey("inventory_items.id"))
    quantity_shipped = Column(Integer, default=1)
    status = Column(Enum(ShippingStatusEnum), default=ShippingStatusEnum.pending)
    
    # Tracking
    tracking_number = Column(String, nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    item = relationship("InventoryItem", back_populates="shipping_orders")
