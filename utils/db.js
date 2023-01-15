const { Client } = require("pg");

const db = new Client({
    host: "localhost",
    user: "postgres",
    password: "mrzxd",
    port: 5432,
    database: "ai",
});

db
    .connect()
    .then(() => console.log(`База данных подключена`))
    .catch((err) => console.log(err));

module.exports.request = async (sql, params) => {
    return new Promise(async (resolve, reject) => {
        await db
            .query(sql, params)
            .then((r) => resolve(r.rows))
            .catch((err) => reject(err));
    });
};
