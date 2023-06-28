# REST API FOR CRABATOADIA RECORDS

This is the REST API for the Crabatoadia Records independent record label. It is built with Node.js, Express, Typescript and PostgreSQL. It's a RESTful API with CRUD operations for the following resources: users, artists, albums, tracks, and concerts. It's purpose will be so serve as a backend hub for all Crabatoadia artists and their music. It will also serve as a backend for the Crabatoadia Records website.

## Database

This project uses [Prisma](https://www.prisma.io/) as ORM and [PostgreSQL](https://www.postgresql.org/) as database.

### Spin up PostgreSQL with docker

```bash
docker run --name postgres -e POSTGRES_PASSWORD=your_password -p 5432:5432 -d postgres
```

This command does a few things:

-docker run: This command is used to start a new Docker container.
--name postgres: This gives the name "postgres" to your new Docker container.
-e POSTGRES_PASSWORD=your_password: This sets an environment variable in the Docker container called POSTGRES_PASSWORD to your_password which is used by PostgreSQL. You should replace your_password with a password of your choice.
-p 5432:5432: This maps port 5432 inside the Docker container to port 5432 on your local machine. PostgreSQL runs on port 5432 by default.
-d postgres: This tells Docker to run the container in the background (detached mode) and to use the "postgres" image from Docker Hub. Docker Hub is a repository of Docker images and "postgres" is the official image for PostgreSQL.

### Open db in browser with:

```
npx prisma studio
```
