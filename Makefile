setup:
	npm install
	npx simple-git-hooks

dev:
	npm run dev

routes:
	npx fastify print-routes app.js

lint:
	npx biome check .

lint-fix:
	npx biome check --write .

.PHONY: routes
