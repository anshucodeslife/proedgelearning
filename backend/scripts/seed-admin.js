const { Client } = require('pg');
const bcrypt = require('bcryptjs');
import dotenv from "dotenv";

dotenv.config();

async function main() {
  const dbUrl = process.env.POSTGRES_URL;
  if (!dbUrl) {
    console.error('Set DATABASE_URL env var first (the Neon connection string).');
    process.exit(1);
  }

  const client = new Client({ connectionString: dbUrl });
  await client.connect();

  const username = 'admin';                // change before production
  const email = 'admin@example.com';       // change
  const plainPassword = 'AdminPassword123!'; // change before production

  const hashed = await bcrypt.hash(plainPassword, 12);

  const upsertSql = `
    INSERT INTO admins (email, username, password)
    VALUES ($1, $2, $3)
    ON CONFLICT (email) DO UPDATE SET username = EXCLUDED.username, password = EXCLUDED.password
    RETURNING id, email, username;
  `;

  const res = await client.query(upsertSql, [email, username, hashed]);
  console.log('Admin created/updated:', res.rows[0]);
  console.log('Plain password (only shown now):', plainPassword);
  await client.end();
}

main().catch(err => { console.error(err); process.exit(1); });
