import fs from "fs/promises";
import path from "path";

export const userAvatarDeletion = async (filename) => {
	const filePath = path.join(process.cwd(), "uploads", filename);

	try {
		await fs.unlink(filePath);
		console.log(`Successfully deleted ${filename}`);
	} catch (err) {
		if (err.code == "ENONET")
			console.error("File does not exist, Nothing to delete.");
		else console.error("Error deleting file: ", err.message);
	}
};
