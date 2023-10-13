brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-gcd:
	node bin/brain-gcd.js

install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .