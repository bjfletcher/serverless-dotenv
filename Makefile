export PATH := ./node_modules/.bin:$(PATH)

npm-publis%:
	npm-prepublish --verbose
	npm publish --access public