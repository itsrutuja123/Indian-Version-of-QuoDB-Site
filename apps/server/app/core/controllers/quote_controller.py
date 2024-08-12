from app.core.services.model_service import model_service
from app.core.models.quote_model import Quote
from app.db.elasticsearch import ElasticsearchClient
from app.core.services.translate_service import translate_service


class QuoteController:
    def __init__(self):
        pass

    def convert(self, quote):
        data = translate_service.translate(quote)
        print("Translated Quote: ", data)
        return model_service.encode(data)

    async def get_quote(self, query: str):
        queryVector = self.convert(query)
        response = await ElasticsearchClient.get_quote(queryVector)
        return response

    async def quotes(self):
        response = await ElasticsearchClient.get_quotes()
        return response

    async def add_quote(self, quote: Quote):
        quoteVector = self.convert(quote.quote)
        document = {
            "ID": quote.quote_id,
            "QuoteVector": quoteVector,
        }
        response = await ElasticsearchClient.insert_quote(document)
        return response

    async def add_quotes_bulk(self, quotes):
        documents = [
            {
                "ID": quote.quote_id,
                "QuoteVector": self.convert(quote.quote),
            }
            for quote in quotes
        ]

        response = await ElasticsearchClient.insert_quotes_bulk(documents)
        return response
