compose:
	docker-compose -f docker-compose.yml pull
	docker-compose -f docker-compose.yml up

start-api:
	docker pull quay.io/quarkus/code-quarkus-api
	docker run -i --rm -p 8080:8080 --env-file ./.envs/.env.redhat quay.io/quarkus/code-quarkus-api

link-library:
	cd frontend && yarn run link-library

unlink-library:
	cd frontend && yarn run unlink-library

upgrade-library:
	cd frontend && yarn upgrade @quarkusio/code-quarkus.components --latest

dev-frontend-staging:
	REACT_APP_BACKEND_URL=https://code.quarkus.stage.redhat.com make dev-frontend

dev-frontend:
	cd frontend && yarn start
