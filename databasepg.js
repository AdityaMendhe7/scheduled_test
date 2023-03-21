const { Pool } = require('pg');

const pool = new Pool({
    user: 'MyDB',
    host: 'localhost',
    database: 'New',
    password: 'root',
    port: 5432,
  });

  pool.query('SELECT * FROM your_table', (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results.rows);
    pool.end();
  });
  



