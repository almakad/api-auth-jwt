const env = require('./env')

console.log(env)

module.exports = {
  "type": env.databaseType,
  "host": env.postgresUrl,
  "port": env.port,
  "username": env.username,
  "password": env.password,
  "database": env.database,
  "synchronize": false,
  "logging": false,
  "entities": [
     "src/app/models/*.ts"
  ],
  "migrations": [
     "src/database/migrations/*.ts"
  ],
  "cli": {
      "migrationsDir": "src/database/migrations"
  }
}