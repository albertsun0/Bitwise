from typing import Union
from lib.model import MODEL
from lib.prompts import GENERATE_ARTICELE_CONFIG, GENERATE_ARTICLE_TEMPLATE
from fastapi.middleware.cors import CORSMiddleware

import json

from fastapi import FastAPI

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


@app.get("/generate/{topic}")
def generate(topic: str):
    prompt = GENERATE_ARTICLE_TEMPLATE.safe_substitute(topic=topic)
    response = MODEL.generate_content(
        prompt, generation_config=GENERATE_ARTICELE_CONFIG
    )
    return json.loads(response.text)
