from string import Template
import typing_extensions as typing
import google.generativeai as genai

generate_article_prompt = """
You are an assistant who will help the user learn about system design. 

You will generate an article in markdown explaining $topic in the context of system design, as well as provide a list of related topics for the user to dive deeper.
"""

# Write an article explaining the technology behind.

# {
#     "article_title": <YOUR RESPONSE HERE>,
#     "article_body": <YOUR RESPONSE HERE>,
#     "related": [<RELATED KEYWORD1>, <RELATED KEYWORD2>, ...]
# }


class GenerateArticleResponse(typing.TypedDict):
    article_title: str
    article_body: str
    related_topics: list[str]


GENERATE_ARTICELE_CONFIG = genai.GenerationConfig(
    response_mime_type="application/json", response_schema=GenerateArticleResponse
)


GENERATE_ARTICLE_TEMPLATE = Template(generate_article_prompt)
