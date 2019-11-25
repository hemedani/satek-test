import { createConnection } from "typeorm";

export const createTypeormConnection = async () => {
  const DB_USER = process.env.DB_USER;
  const DB_PASS = process.env.DB_PASS;
  const DB_NAME = process.env.DB_NAME;
  const DB = process.env.DB;
  const DB_PORT = process.env.DB_PORT;
  const NODE_ENV = process.env.NODE_ENV;

  if (NODE_ENV !== "production") {
    console.log(
      `\nDB: ${DB},\nDB_PORT: ${DB_PORT},\nDB_USER: ${DB_USER},\nDB_PASS: ${DB_PASS},\nDB_NAME: ${DB_NAME},\nNODE_ENV: ${NODE_ENV}\n`
    );
  }

  return createConnection({
    name: "default",
    type: DB as any,
    host: "localhost",
    port: DB_PORT as any,
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    synchronize: true,
    logging: NODE_ENV !== "production",
    // dropSchema: true,
    entities: ["src/entity/*.*"],
    migrations: ["src/migration/*.ts"],
    cli: {
      migrationsDir: "src/migration"
    }
    // cache: {
    //     type: "redis",
    //     options: {
    //         host: "localhost",
    //         port: 6379
    //     },
    //     duration: 60000
    // }
  });
};
