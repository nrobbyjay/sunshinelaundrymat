from fastapi import FastAPI, Depends
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
from store import order, Base, engine, createOrders, getData, SessionLocal, Order
from typing import List

app = FastAPI()
Base.metadata.create_all(bind=engine)

@app.get("/deliveries", response_model=List[order])
def getDeliveries(db: Session = Depends(getData)):
    try:
        orders = db.query(Order).filter(Order.type == "delivery").all()
        return orders
    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"code":500, "message":e}
        )

@app.get("/pickups", response_model=List[order])
def getPickups(db: Session = Depends(getData)):
    try:
        orders = db.query(Order).filter(Order.type == "pickup").all()
        return orders
    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"code":500, "message":e}
        )
        
@app.post("/delivery")
def newDelivery(order: order):
    try:
        createOrders(order, "delivery")
        return JSONResponse(
            status_code=201,
            content={"code":201, "message":"Success"}
        )
    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"code":500, "message":str(e)}
        )


@app.post("/pickup")
def newPickup(order: order):
    try:
        createOrders(order, "pickup")
        return JSONResponse(
            status_code=201,
            content={"code":201, "message":"Success"}
        )
    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"code":500, "message":str(e)}
        )