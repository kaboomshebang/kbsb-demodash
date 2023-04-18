install:
	pnpm install

# run development server
# accept traffic from all of the available interfaces (0.0.0.0)
dev: install
	pnpm run dev

# export/build for production
build: install
	pnpm run build

# preview/test the production export on 0.0.0.0:8000
preview:
	cd dist; python -m http.server
