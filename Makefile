build:
	docker build -t mt/superkassa_test .

test:
	docker run -it mt/superkassa_test npx jest

dev:
	docker run -it -v $PWD:/usr/src/app mt/superkassa_test bash

lint:
	npx  eslint .
