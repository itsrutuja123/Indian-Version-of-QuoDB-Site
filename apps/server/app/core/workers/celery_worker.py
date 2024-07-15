from celery.app import Celery
from dotenv import load_dotenv
import asyncio
from celery import group
from app.core.models.quote_model import Quote

from app.core.services.quote import Quote_Service

load_dotenv(".env")


def make_celery():
    celery = Celery(
        __name__, backend="redis://redis_quote:6379/0", broker="redis://redis_quote:6379/0"
    )
    return celery


celery_app = make_celery()
celery_app.conf.update(
    task_serializer="json",
    result_serializer="json",
    accept_content=["json"]
)

@celery_app.task(name="add_bulk_quotes")
def quote_worker(data):
    service = Quote_Service()
    quotes = [Quote(**quote_data) for quote_data in data]
    response = asyncio.run(service.add_bulk_quotes(quotes))
    return response
