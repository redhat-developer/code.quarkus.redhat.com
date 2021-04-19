.PHONY: code.quarkus.io

code.quarkus.io:
	$(MAKE) --directory=$(MAKECMDGOALS)

merge-with-upstream:
	git subtree pull --prefix code.quarkus.io https://github.com/quarkusio/code.quarkus.io main --squash
