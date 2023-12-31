brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-gcd:
	node bin/brain-gcd.js

brain-calc:
	node bin/brain-calc.js

brain-progression:
	node bin/brain-progression.js

brain-prime:
	node bin/brain-prime.js

install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint --fix .