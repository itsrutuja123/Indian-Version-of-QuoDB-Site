from sentence_transformers import SentenceTransformer

class ModelService:
    def __init__(self):
        self.model = SentenceTransformer('all-mpnet-base-v2')

    def encode(self, text: str):
        return self.model.encode(text).tolist()

model_service = ModelService()
