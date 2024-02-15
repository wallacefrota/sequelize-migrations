# sequelize-migrations
Example crud in nodejs using sequelize migrations

### Create migration

Para criar uma migration, utilize o seguinte comando.
```js
npx sequelize-cli migration:generate --name nome-da-migration
```

### Run migration
Para que as alterações feitas na migration sejam refletidas em sua base de dados, utilize o seguinte comando.
```js
 npx sequelize-cli db:migrate
```