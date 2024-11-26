from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Configuración para SQLite, cambia la URL si decides usar PostgreSQL
SQLALCHEMY_DATABASE_URL = "sqlite:///./restaurant.db"

# Para PostgreSQL sería algo como:
# SQLALCHEMY_DATABASE_URL = "postgresql://user:password@localhost/restaurantdb"

engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={
                       "check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
