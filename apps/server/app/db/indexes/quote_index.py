quote_index_mapping = {
    "mappings": {
        "properties": {
            "Movie":{
                "type":"text"
            },
            "Year":{
                "type":"text"
            },
            "Quote":{
                "type":"text"
            },
            "QuoteVector":{
                "type":"dense_vector",
                "dims":768,
                "index":True,
                "similarity":"cosine"
            },
        }
    }
}
