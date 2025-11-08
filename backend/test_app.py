from datetime import datetime
from fastapi.testclient import TestClient
from app import app

client = TestClient(app)

def test_create_delivery():
    response = client.post("/delivery", json={
        "name":"pytest", 
        "email":"email@invalid.com", 
        "type":"delivery", 
        "contactNumber":"000-000-0000",
        "includeDetergent": "true", 
        "includeFabcon": "true",
        "address":"Success Street, Sample City of Test, Manila 2001, Philippines",
        "pickupDateTime": f"{datetime.now()}",
        "deliveryDateTime":f"{datetime.now()}"})
    assert response.status_code == 201


def test_get_deliveries():
    response = client.get("/deliveries")
    assert response.status_code == 200

def test_create_pickup():
    response = client.post("/pickup", json={
        "name":"pytest", 
        "email":"email@invalid.com", 
        "type":"pickup", 
        "contactNumber":"000-000-0000",
        "includeDetergent": "true", 
        "includeFabcon": "true",
        "address":"Success Street, Sample City of Test, Manila 2001, Philippines",
        "pickupDateTime": f"{datetime.now()}",
        "deliveryDateTime":f"{datetime.now()}"})
    assert response.status_code == 201

def test_get_pickups():
    response = client.get("/pickups")
    assert response.status_code == 200