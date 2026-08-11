setup:
	pnpm install
	pnpm exec simple-git-hooks

dev:
	pnpm run dev

routes:
	pnpm exec fastify print-routes app.js

lint:
	pnpm --silent run lint
	pnpm --silent run format:check

lint-fix:
	pnpm --silent run lint:fix

.PHONY: routes

test:
	pnpm --silent test
