# Backend

### Local Development With Venv

```bash
python3 -m venv .venv
# make sure to use python 3.9*
/usr/bin/python3 -m venv .venv

source .venv/bin/activate
pip install -r requirements.txt

fastapi dev main.py

deactivate
```

### Local Development With Docker

```bash
docker buildx build -t backend .
docker run -p 8000:8000 --env-file .env backend
```
