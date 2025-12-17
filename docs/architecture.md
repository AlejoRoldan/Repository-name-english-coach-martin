# 🏗️ Architecture Overview

## System Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                         FRONTEND                             │
│                        (Next.js)                             │
└─────────────────────────────────────────────────────────────┘
                            │ HTTPS/WSS
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                      API GATEWAY                             │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    BACKEND SERVICES                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │    User      │  │   Session    │  │   AI Agent   │      │
│  │   Service    │  │   Service    │  │   Service    │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                      DATA LAYER                              │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐               │
│  │PostgreSQL │  │   Redis   │  │ Vector DB │               │
│  └───────────┘  └───────────┘  └───────────┘               │
└─────────────────────────────────────────────────────────────┘
```

## Tech Stack Details

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety
- **TailwindCSS**: Styling
- **Zustand**: State management
- **Socket.io**: Real-time communication

### Backend
- **FastAPI**: Modern Python web framework
- **PostgreSQL**: Relational database
- **Redis**: Caching and sessions
- **Pinecone**: Vector database for AI
- **Celery**: Background tasks

### AI/ML
- **Claude (Anthropic)**: Main LLM for tutoring
- **OpenAI Embeddings**: Text embeddings
- **spaCy**: NLP processing

## Data Flow

1. User sends message through WebSocket
2. Backend receives and stores message
3. AI Agent processes with context
4. Claude generates response
5. Response streamed back to user
6. Learning metrics updated
7. Progress stored in database

## Security

- JWT authentication
- HTTPS only in production
- Rate limiting on API
- Input validation
- SQL injection prevention
- XSS protection
```

4. **"Commit new file"**

---

## 🎉 ¡LISTO! Tu repositorio está creado

Ahora tu repositorio debería verse así:
```
english-coach-martin/
├── .gitignore
├── LICENSE
├── README.md
├── package.json
├── turbo.json
├── docker-compose.yml
├── Makefile
├── .env.example
├── apps/
│   ├── web/
│   └── api/
├── packages/
│   ├── shared/
│   └── ai-agent/
├── infrastructure/
│   ├── docker/
│   └── k8s/
└── docs/
    └── architecture.md
```

---

## 📱 Ver tu repositorio

Para ver tu repositorio completo, ve a:
```
https://github.com/TU_USUARIO/english-coach-martin
