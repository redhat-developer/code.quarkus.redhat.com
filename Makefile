compose-internal:
	docker-compose -f docker-compose-internal.yml up

start-internal-api:
	docker run -i --rm -p 8080:8080 --env-file ./.envs/.env.internal quay.io/quarkus/code-quarkus-api

link-library:
	cd frontend && npm run link-library

unlink-library:
	cd frontend && npm run unlink-library

start-frontend:
	cd frontend && npm start
