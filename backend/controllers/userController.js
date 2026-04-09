import db from "../database/database.js";
import { userAvatarDeletion } from "../utilities/userAvatarDeletion.js";

export const getUserData = async (req, res) => {
	const q = "SELECT * FROM users";
	db.get(q, [], (err, rows) => {
		if (err) return res.status(400).json({ message: err.message });

		const imageUrl = `uploads/${rows.pfpUrl}`;

		res.status(200).json({ name: rows.name, avatar: imageUrl });
	});
};

export const postUserData = async (req, res) => {
	if (!req.file || !req.body.name)
		return res.status(400).json({ message: "Please upload the image" });

	const imagePath = `${req.file.filename}`;
	const name = req.body.name;

	const q = "INSERT INTO users(name, pfpurl) VALUES (? , ?)";

	db.run(q, [name, imagePath], (err) => {
		if (err) return res.status(500).json({ message: err.message });
		res.json({ message: "Success!" });
	});
};

export const updateUserData = async (req, res) => {
	const q = "SELECT * FROM users";

	const data = await new Promise((resolve, reject) => {
		db.get(q, [], (err, data) => {
			if (err) reject(err);
			resolve(data);
		});
	});

	const imagePath = req.file?.filename || data.pfpUrl;
	const name = req.body.name || data.name;

	if (req.file) await userAvatarDeletion(data.pfpUrl);

	const update_q = "UPDATE users SET name = ?, pfpUrl = ?";
	db.run(update_q, [name, imagePath], (err) => {
		if (err) return res.status(500).json({ message: err.message });
		return res.status(200).json({ message: "Successfully Updated!" });
	});
};
