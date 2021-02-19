import { createConnection } from 'typeorm'

createConnection()
    .then(() => console.log('Succcessfully connect with database'))
    .catch(err => console.log(err))