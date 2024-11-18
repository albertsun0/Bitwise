FROM python:3.9

WORKDIR /app

COPY . /app

RUN pip install -r requirements.txt

USER 3000:3000
EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]