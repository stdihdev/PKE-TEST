.PHONY: start
start:
	docker-compose up -d db graphql nextjs

.PHONY: migration
migration:
	docker-compose run -d migration
