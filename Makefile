export PATH := ./node_modules/.bin:$(PATH)

test:

npm-publis%:
	npm-prepublish --verbose
	npm publish --access public