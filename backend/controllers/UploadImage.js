const multer = require("multer");
const path = require("path");
const fs = require("fs");



// ✅ Create 'uploads' folder if it doesn't exist
const UPLOAD_DIR = path.join(__dirname, "uploads");
if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
}

// ✅ Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOAD_DIR);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        cb(null, `${uniqueSuffix}-${file.originalname}`);
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true);
    } else {
        cb(new Error("Only image files are allowed"));
    }
};

const upload = multer({ storage, fileFilter });

// ✅ Handle multiple file uploads
app.post("/upload", upload.array("files", 10), (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ success: false, message: "No files uploaded" });
    }

    const files = req.files.map((file) => ({
        filename: file.filename,
        url: `/uploads/${file.filename}`,
        size: file.size,
    }));

    res.status(201).json({
        success: true,
        message: "Files uploaded successfully",
        files,
    });
});

// ✅ Serve uploaded files statically
app.use("/uploads", express.static(UPLOAD_DIR));

// ✅ Error handling middleware
app.use((err, req, res, next) => {
    console.error("Error:", err.message);
    res.status(500).json({ success: false, message: err.message });
});

// ✅ Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
