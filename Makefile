build: 
	npm run build

publish:
	git subtree push --prefix dist origin gh-pages

server:
	npm run dev