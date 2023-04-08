# run development server
# accept traffic from all of the available interfaces (0.0.0.0)
dev:
	pnpm run dev

# export/build for production
build:
	pnpm run build

# preview/test the production export on 0.0.0.0:8000
preview:
	cd dist; python -m http.server
