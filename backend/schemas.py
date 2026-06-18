from pydantic import BaseModel, ConfigDict
from typing import Optional
from datetime import datetime
from .models import RoleEnum, ShippingStatusEnum

class UserBase(BaseModel):
    username: str
    role: RoleEnum

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: int

    model_config = ConfigDict(from_attributes=True)

class InventoryItemBase(BaseModel):
    name: str
    description: Optional[str] = None
    quantity: int = 0
    price: float = 0.0
    cost: float = 0.0
    low_stock_threshold: int = 10
    barcode: Optional[str] = None
    is_cold_storage: bool = False
    temperature_req: Optional[str] = None
    is_fragile: bool = False
    packaging_req: Optional[str] = None
    expiry_date: Optional[datetime] = None

class InventoryItemCreate(InventoryItemBase):
    pass

class InventoryItem(InventoryItemBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    model_config = ConfigDict(from_attributes=True)

class ShippingOrderBase(BaseModel):
    item_id: int
    quantity_shipped: int = 1
    status: ShippingStatusEnum = ShippingStatusEnum.pending
    tracking_number: Optional[str] = None

class ShippingOrderCreate(ShippingOrderBase):
    pass

class ShippingOrder(ShippingOrderBase):
    id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    model_config = ConfigDict(from_attributes=True)
