dev:
	pnpm run devtail

# build for production

build:
	export NODE_ENV=production && pnpm --version

# test the production export
