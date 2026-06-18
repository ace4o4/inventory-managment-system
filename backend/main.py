from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from . import models, schemas, database

models.Base.metadata.create_all(bind=database.engine)

app = FastAPI(title="Inventory Management API", version="1.0.0")

@app.get("/")
def read_root():
    return {"message": "Welcome to the Inventory Management System API"}

@app.get("/inventory/", response_model=list[schemas.InventoryItem])
def read_inventory(skip: int = 0, limit: int = 100, db: Session = Depends(database.get_db)):
    items = db.query(models.InventoryItem).offset(skip).limit(limit).all()
    return items

@app.post("/inventory/", response_model=schemas.InventoryItem)
def create_inventory_item(item: schemas.InventoryItemCreate, db: Session = Depends(database.get_db)):
    db_item = models.InventoryItem(**item.model_dump())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

@app.get("/shipping/", response_model=list[schemas.ShippingOrder])
def read_shipping_orders(skip: int = 0, limit: int = 100, db: Session = Depends(database.get_db)):
    orders = db.query(models.ShippingOrder).offset(skip).limit(limit).all()
    return orders
