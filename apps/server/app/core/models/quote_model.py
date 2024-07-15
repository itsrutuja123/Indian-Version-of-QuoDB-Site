from pydantic import BaseModel
from typing import Optional  


class Quote(BaseModel):
    movie: str
    quote: str
    year: str
