from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="PocketSmart AI")

# Allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # allow all origins for testing
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Root route (fixes "Not Found" when opening base URL)
@app.get("/")
def read_root():
    return {"message": "PocketSmart AI backend is running successfully!"}

# 🏠 Home Planner
@app.get("/generate-home")
def generate_home(budget: int):
    return {
        "planner": "home",
        "budget": budget,
        "recommendations": ["Lights", "Furniture", "Dining Table"]
    }

# 🎉 Party Planner
@app.get("/generate-party")
def generate_party(budget: int, guests: int):
    return {
        "planner": "party",
        "budget": budget,
        "guests": guests,
        "recommendations": ["Venue", "Catering", "Decoration"]
    }

# 💎 Jewelry Planner
@app.get("/generate-jewelry")
def generate_jewelry(budget: int):
    return {
        "planner": "jewelry",``
        "budget": budget,
        "recommendations": ["Necklace", "Earrings", "Bracelet"]
    }
