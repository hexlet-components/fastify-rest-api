dev:
	npm run dev

routes:
	npx fastify print-routes app.js

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

.PHONY: routes
