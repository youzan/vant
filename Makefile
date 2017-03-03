.PHONY: test
usage = "\
Usage:                       make <option> \n\n\
init componentname           初始化一个新组件，请忽视makefile的报错  \n\n\
\n"


default:
	@echo $(usage)

init:
	node build/bin/init.js $(filter-out $@,$(MAKECMDGOALS))

dev:
	npm run dev

test:
	npm run test
