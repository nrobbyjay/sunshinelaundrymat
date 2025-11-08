from pydantic import BaseModel
from datetime import datetime
from sqlalchemy import create_engine, Column, Integer, String, DateTime, Boolean
from sqlalchemy.orm import declarative_base, sessionmaker

Base = declarative_base()
engine = create_engine("sqlite:///dump.db")
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

class order(BaseModel):
    name: str
    email: str
    type: str
    contactNumber: str
    includeDetergent: bool
    includeFabcon: bool
    address: str
    pickupDateTime: datetime
    deliveryDateTime: datetime
    created: datetime = datetime.utcnow()

    class Config:
        orm_mode=True

class Order(Base):
    __tablename__="orders"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String)
    address = Column(String)
    type = Column(String)
    contactNumber = Column(String)
    includeDetergent = Column(Boolean)
    includeFabcon = Column(Boolean)
    pickupDateTime = Column(DateTime)
    deliveryDateTime = Column(DateTime)
    created = Column(DateTime)

def createOrders(data, type:str):
    db = SessionLocal()
    payload = data.dict()
    payload["type"] = type
    order = Order(**payload)
    db.add(order)
    db.commit()
    db.refresh(order)
    db.close()

def getData():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()