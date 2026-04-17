# DevOps Project - Kubernetes + CI/CD Pipeline

This project demonstrates a complete DevOps workflow:

- Dockerized Node.js application
- Kubernetes Deployment & Service
- Ingress-based routing
- CI pipeline using GitHub Actions

## Architecture

User → Ingress → Service → Pod → Container → Application

## Features

- Containerized application using Docker
- Kubernetes Deployment & Service
- Ingress Controller for routing
- CI pipeline with GitHub Actions
- Image pushed to DockerHub

## Run Locally

### Build Docker Image
docker build -t suraj0294/suraj-app .

### Run Container
docker run -p 3000:3000 suraj0294/suraj-app

## Kubernetes Deployment

kubectl apply -f suraj-deploy.yaml
kubectl apply -f suraj-service.yaml
kubectl apply -f suraj-ingress.yaml

## Access

kubectl port-forward -n ingress-nginx svc/ingress-nginx-controller 9090:80

curl -H "Host: suraj.local" http://localhost:9090

## CI/CD Pipeline

- Triggered on push to main branch
- Builds Docker image
- Pushes image to DockerHub

## Author

Suraj Kumar

