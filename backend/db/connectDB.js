import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			// To avoid warnings in the console
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

export default connectDB;
// 1. useNewUrlParser
// Purpose: Makes Mongoose use a new, better way of reading the MongoDB connection string.
// Why it’s needed: The old method of reading the connection string was outdated and gave warnings. The new method is more reliable.
// When to use: Always use it to avoid warnings and ensure better parsing.
// 2. useUnifiedTopology
// Purpose: Tells Mongoose to use a new connection management system that handles server connections more effectively.
// Why it’s needed: The old connection management system had problems, so MongoDB introduced a new, better system. This option activates that system.
// When to use: Always use it to improve connection reliability and avoid warnings.
// Why use both?
// Both options help avoid warnings and ensure your app connects to MongoDB more smoothly, especially as MongoDB and Mongoose keep improving their systems. It’s a good practice to include them in your connection settings.






