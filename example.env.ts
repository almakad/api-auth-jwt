module.exports = {
  postgresUrl: process.env.POSTGRESURL || 'QUALQUER COISA',
  port: process.env.PORT || 'PORT',
  password: process.env.PASSWORD || 'QUALQUER COISA',
  database: process.env.DATABASE || 'QUALQUER COISA',
  databaseType: process.env.DbType || 'QUALQUER COISA',
  username: 'QUALQUER COISA',
  jwtSecret: process.env.JWT_SECRET || 'QUALQUER SECRET'
}
