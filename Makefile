compose-internal:
	docker-compose -f docker-compose-internal.ym pull
	docker-compose -f docker-compose-internal.yml up

compose:
	docker-compose -f docker-compose.yml pull
	docker-compose -f docker-compose.yml up

start-internal-api:
	docker pull quay.io/quarkus/code-quarkus-api
	docker run -i --rm -p 8080:8080 --env-file ./.envs/.env.internal quay.io/quarkus/code-quarkus-api

start-api:
	docker pull quay.io/quarkus/code-quarkus-api
	docker run -i --rm -p 8080:8080 --env-file ./.envs/.env.redhat quay.io/quarkus/code-quarkus-api

link-library:
	cd frontend && yarn run link-library

unlink-library:
	cd frontend && yarn run unlink-library

upgrade-library:
	cd frontend && yarn upgrade @quarkusio/code-quarkus.components --latest

dev-frontend:
	cd frontend && yarn start
