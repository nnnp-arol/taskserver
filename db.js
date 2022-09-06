import { createPool } from "mysql2/promise";

export const pool = createPool({
  database: "taskdb",
  user: "y7w2ll0sqpi1mdg08i4f",
  host: "aws.connect.psdb.cloud",
  password: "pscale_pw_No9Ttrz9yxIckxxoLebpVGjdlfU5HxHzXRyIw6FEwAI",
  ssl: {
    rejectUnauthorized: false,
  },
});
