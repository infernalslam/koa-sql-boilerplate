# KOA BACKEND WITH DOCKER

```bash
$ docker build -t <image-name> .
$ docker run -p3000:3000  --entrypoint="nodemon" -v`pwd`:/app <image-name>:latest
```

# run migration: create file with sequelize
npm run migration:create -- --name=migrationName
