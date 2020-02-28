dev:
	cd code.quarkus.io && make dev

start-web:
	cd code.quarkus.io && make start-web

dev-web:
	cd code.quarkus.io && make dev-web

debug:
	cd code.quarkus.io && make debug

clean:
	cd code.quarkus.io && make clean

native:
	cd code.quarkus.io && make native

merge-with-upstream:
	git subtree pull --prefix code.quarkus.io https://github.com/quarkusio/code.quarkus.io master --squash
