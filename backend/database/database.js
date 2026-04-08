import sqlite from "sqlite3";

const db = new sqlite.Database("./database.sqlite", (err) => {
	if (err) {
		console.error("Error opening database: ", err);
	} else {
		console.log("Connected to database!");
		db.run(
			"CREATE TABLE IF NOT EXISTS users (name TEXT PRIMARY KEY, pfpUrl TEXT)",
		);
	}
});

export default db;
