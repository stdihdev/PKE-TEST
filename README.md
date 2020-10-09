# Wardrobe

A simple app built with Node.js, GraphQL, and React.

## Getting started

1. Clone the repo locally:

```shell
git clone https://github.com/stevendinhdev/PKE-TEST.git
```

2. Run migration

```shell
make migration # docker-compose run migration
```

3. Run the docker containers with docker-compose:

```shell
make start # docker-compose up -d db graphql nextjs
```

3. Open http://localhost:3000 to view the app.

You can also view the GraphQL playground at http://localhost:5000/graphql. To stop the app run:

```
docker-compose down
```
