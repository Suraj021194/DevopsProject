🔥 1. Project Title

# DevOps Project - Kubernetes + CI/CD Pipeline

🔥 2. Project Description

This project demonstrates a complete DevOps workflow:

- Dockerized Node.js application
- Kubernetes Deployment & Service
- Ingress-based routing
- CI pipeline using GitHub Actions

🔥 3. Architecture (VERY IMPORTANT)
## Architecture

User → Ingress → Service → Pod → Container → Application

🔥 4. Features  
## Features

- Containerized application using Docker
- Kubernetes Deployment & Service
- Ingress Controller for routing
- CI pipeline with GitHub Actions
- Image pushed to DockerHub

🔥 5. How to Run (Practical)
## Run Locally

### Build Docker Image
docker build -t suraj0294/suraj-app .

### Run Container
docker run -p 3000:3000 suraj0294/suraj-app

🔥 6. Kubernetes Setup
## Kubernetes Deployment

kubectl apply -f suraj-deploy.yaml
kubectl apply -f suraj-service.yaml
kubectl apply -f suraj-ingress.yaml

🔥 7. Access Application
## Access

kubectl port-forward -n ingress-nginx svc/ingress-nginx-controller 9090:80

curl -H "Host: suraj.local" http://localhost:9090

🔥 8. CI/CD Pipeline
## CI/CD Pipeline

- Triggered on push to main branch
- Builds Docker image
- Pushes image to DockerHub

🔥 9. Author
## Author

Suraj Kumar

