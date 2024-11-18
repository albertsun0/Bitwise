import dotenv
import os
import google.generativeai as genai

dotenv.load_dotenv(".env", override=True)

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=GEMINI_API_KEY)

MODEL = genai.GenerativeModel("gemini-1.5-flash")
