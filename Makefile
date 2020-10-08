.PHONY: start
start:
	docker-compose up db graphql nextjs

.PHONY: migration
migration:
	docker-compose run migration
