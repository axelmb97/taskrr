-- CREATE DATABASE IF NOT EXISTS taskrr-db
SELECT 'CREATE DATABASE taskrr-db'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'taskrr-db')\gexec