.PHONY: build immap package release

build:
	npm run dist

immap: build
	npm run immap:deploy

package: immap
	python setup.py sdist