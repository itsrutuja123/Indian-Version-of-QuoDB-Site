from fastapi import APIRouter

# from .analyse import analyse_router

from .quote import quote_router

v1_router = APIRouter()
v1_router.include_router(quote_router, prefix="/quote", tags=["Quote"])
