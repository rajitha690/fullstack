const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,  // Optional, to avoid deprecation warning
            useCreateIndex: true      // Optional, to avoid deprecation warning
        };

        // Fetch MongoDB URI from environment variable, fallback to default
        const mongoUri = process.env.MONGO_URI || "mongodb://mongo:27017/todoapp";

        // Debug log to check what's being used
        console.log("🔧 Using Mongo URI:", mongoUri);

        // Connect to MongoDB
        await mongoose.connect(mongoUri, connectionParams);
        console.log("✅ Our Backend API is successfully connected to Mongo database.");
    } catch (error) {
        console.error("❌ Could not connect to database.", error);
        process.exit(1);
    }
};
