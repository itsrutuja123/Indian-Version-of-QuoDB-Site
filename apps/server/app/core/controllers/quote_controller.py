from app.core.services.model_service import model_service
import pandas as pd
from app.core.models.quote_model import Quote
from app.db.elasticsearch import ElasticsearchClient

class QuoteController:
    def __init__(self):
        pass 
    
    async def get_quote(self, query:str):
        queryVector=model_service.encode(query)
        response=await ElasticsearchClient.get_quote(queryVector)
        return response
    
    async def quotes(self):
        response=await ElasticsearchClient.get_quotes()
        return response
    
    async def add_quote(self, quote:Quote):
        quoteVector=model_service.encode(quote.quote)
        document={
            "Movie":quote.movie,
            "Year":quote.year,
            "Quote":quote.quote,
            "Language":quote.language,
            "QuoteVector":quoteVector
        }
        response=await ElasticsearchClient.insert_quote(document)
        return response
    
    async def add_quotes_bulk(self, quotes):
        documents = [{
            "Movie": quote.movie,
            "Year": quote.year,
            "Quote": quote.quote,
            "QuoteVector": model_service.encode(quote.quote),
            "Language": quote.language
        } for quote in quotes]

        response = await ElasticsearchClient.insert_quotes_bulk(documents)
        return response
