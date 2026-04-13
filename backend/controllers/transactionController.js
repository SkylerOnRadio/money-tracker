import db from "../database/database.js";

export const postTransactions = async (req, res) => {
	const { date, time, to, from, amount, type } = req.body;

	if (!date || !time || !to || !from || !amount || !type)
		return res
			.status(400)
			.json({ message: "You need to fill all the fields!" });

	const q =
		"INSERT INTO transactions (date, time, t_to, t_from, amount, type) VALUES (?, ?, ?, ?, ?, ?)";

	db.run(q, [date, time, to, from, amount, type], function (err) {
		if (err) return res.status(500).json({ message: err.message });

		db.get(
			"SELECT * FROM transactions WHERE tid = ?",
			[this.lastID],
			(err, row) => {
				if (err) return res.json(500).json({ message: err.message });
				res.status(201).json(row);
			},
		);
	});
};
