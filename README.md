# Description

The purpose of this project is to demonstrate working sequelize model associations when project is setup via migrations instead of `.sync()`

## Getting Started

- Instantiate a Postgres database instance
- `npm install`
- `npx sequelize-cli db:create`
- `npx sequelize-cli db:migrate`
- `npx sequelize-cli db:seed:all`
- `npm run start`

[Reference](https://levelup.gitconnected.com/creating-sequelize-associations-with-the-sequelize-cli-tool-d83caa902233)

## Dev Container

- Connect to postgres inside `.devcontainer` via `psql -h localhost --user postgres`
