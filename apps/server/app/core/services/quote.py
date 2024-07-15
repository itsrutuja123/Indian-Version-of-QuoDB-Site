from app.core.services.model_service import model_service
from app.core.models.quote_model import Quote
from app.db.elasticsearch import ElasticsearchClient

class Quote_Service:
    def __init__(self):
        pass
        
    async def add_bulk_quotes(self,data):
        documents = [{
            "Movie": quote.movie,
            "Year": quote.year,
            "Quote": quote.quote,
            "QuoteVector": model_service.encode(quote.quote)
        } for quote in data]

        response = await ElasticsearchClient.insert_quotes_bulk(documents)
        return response