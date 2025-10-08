import nextConnect from "next-connect";
import multer from "multer";
import * as XLSX from "xlsx";
import { MongoClient } from "mongodb";

const upload = multer({ storage: multer.memoryStorage() });
const client = new MongoClient(process.env.MONGO_URI);

const handler = nextConnect();
handler.use(upload.single("file"));

handler.post(async (req, res) => {
  try {
    const workbook = XLSX.read(req.file.buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);

    await client.connect();
    const db = client.db("jobMailer");
    await db.collection("contacts").insertMany(data);

    res.status(200).json({ message: "File uploaded and data saved!", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  } finally {
    await client.close();
  }
});

export const config = {
  api: {
    bodyParser: false, // Multer handles parsing
  },
};

export default handler;
