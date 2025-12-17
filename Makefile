.PHONY: help install dev build test clean docker-up docker-down migrate

help:
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@echo '  install      Install all dependencies'
	@echo '  dev          Start development servers'
	@echo '  build        Build all applications'
	@echo '  test         Run all tests'
	@echo '  clean        Clean dependencies and build artifacts'
	@echo '  docker-up    Start all services with Docker'
	@echo '  docker-down  Stop all Docker services'
	@echo '  migrate      Run database migrations'

install:
	npm install
	cd apps/api && pip install -r requirements.txt

dev:
	docker-compose up -d postgres redis
	npm run dev

build:
	npm run build
	cd apps/api && pip install -r requirements.txt

test:
	npm run test
	cd apps/api && pytest

clean:
	npm run clean
	find . -type d -name "__pycache__" -exec rm -rf {} +
	find . -type f -name "*.pyc" -delete

docker-up:
	docker-compose up -d

docker-down:
	docker-compose down

docker-logs:
	docker-compose logs -f

migrate:
	cd apps/api && alembic upgrade head

migrate-create:
	cd apps/api && alembic revision --autogenerate -m "$(message)"

db-reset:
	docker-compose down -v
	docker-compose up -d postgres
	sleep 3
	make migrate
