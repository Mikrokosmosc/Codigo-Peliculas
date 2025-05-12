import mysql from 'mysql'

export const Connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'base-peliculas'
})

Connection.connect(err => {
    if (err) {
      console.error('Error de conexión a la base de datos: ' + err.stack);
      return;
    }
    console.log('Conexión a la base de datos MySQL establecida con el ID: ' + Connection.threadId);
  });