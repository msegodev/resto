from fastapi import APIRouter
from database import SessionLocal

router = APIRouter()

# Dependencia para la sesión de la base de datos
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
