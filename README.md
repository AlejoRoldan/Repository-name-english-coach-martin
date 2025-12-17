# 🚀 English Coach - Martín

AI-powered English learning platform designed for young learners. Gamified, personalized, and fun!

## ✨ Features

- 🎮 **Gamification**: XP, levels, achievements, streaks
- 🤖 **AI Tutor**: Powered by Claude (Anthropic)
- ⚽ **Personalized**: Topics about football, perfumes, and Formula 1
- 📊 **Progress Tracking**: Vocabulary, grammar, fluency metrics
- ⏱️ **Flexible Sessions**: 10-60 minute practice sessions
- 🌐 **Spanglish Mode**: Natural mix of English and Spanish

## 🏗️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + shadcn/ui
- **State**: Zustand
- **Real-time**: Socket.io

### Backend
- **API**: FastAPI (Python)
- **Database**: PostgreSQL
- **Cache**: Redis
- **Vector DB**: Pinecone
- **Queue**: Celery

### AI/ML
- **LLM**: Anthropic Claude Sonnet 4
- **Embeddings**: OpenAI Ada-002
- **NLP**: spaCy

## 📁 Project Structure
```
english-coach-martin/
├── apps/
│   ├── web/                 # Next.js frontend
│   └── api/                 # FastAPI backend
├── packages/
│   ├── shared/              # Shared types & utilities
│   └── ai-agent/            # AI agent logic
├── infrastructure/
│   ├── docker/
│   └── k8s/
└── docs/
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Python 3.11+
- Docker (optional)
- PostgreSQL 15+
- Redis 7+

### Installation
```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/english-coach-martin.git
cd english-coach-martin

# Install frontend dependencies
cd apps/web
npm install

# Install backend dependencies
cd ../api
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Edit .env with your API keys

# Run database migrations
cd apps/api
alembic upgrade head

# Start development servers
npm run dev        # Frontend (http://localhost:3000)
python main.py     # Backend (http://localhost:8000)
```

## 🔑 Environment Variables

Create `.env` files in both `apps/web` and `apps/api`:

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_WS_URL=ws://localhost:8000
```

### Backend (.env)
```
DATABASE_URL=postgresql://user:password@localhost:5432/english_coach
REDIS_URL=redis://localhost:6379
ANTHROPIC_API_KEY=your_claude_api_key
OPENAI_API_KEY=your_openai_api_key
PINECONE_API_KEY=your_pinecone_api_key
```

## 📖 Documentation

- [Architecture Overview](./docs/architecture.md)
- [API Documentation](./docs/api.md)
- [AI Agent Design](./docs/ai-agent.md)
- [Deployment Guide](./docs/deployment.md)

## 🧪 Testing
```bash
# Frontend tests
cd apps/web
npm run test

# Backend tests
cd apps/api
pytest
```

## 📊 Current Status

- [x] Initial project setup
- [x] UI/UX design
- [ ] Backend API development
- [ ] AI agent implementation
- [ ] Database schema & migrations
- [ ] Real-time chat integration
- [ ] Progress tracking system
- [ ] Authentication & authorization
- [ ] Deployment pipeline

## 🤝 Contributing

This is a personal project for Martín's English learning. Not accepting external contributions at this time.

## 📝 License

MIT License - See LICENSE file for details

## 👨‍💻 Author

Alejo - IttiAcademy

---

Made with ❤️ for Martín's English learning journey 🚀
