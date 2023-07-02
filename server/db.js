const Pool = require("pg").Pool;

const pool = new Pool({
  user: "gqittgxa",
  host: "mahmud.db.elephantsql.com",
  port: "5432",
  password: "ggONTzbJ1tRkC3_dLqCSBk9qQnWaUwGT",
  database: "gqittgxa",
});

module.exports = pool;
