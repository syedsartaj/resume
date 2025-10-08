import nodemailer from "nodemailer";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI);

export default async function handler(req, res) {
  try {
    await client.connect();
    const db = client.db("jobMailer");
    const contacts = await db.collection("contacts").find().toArray();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    for (const contact of contacts) {
      if (contact.Email) {
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: contact.Email,
          subject: "Job Opportunity",
          text: `Hello, we have a new job opening at your company.`,
        });
      }
    }

    res.status(200).json({ message: "Emails sent!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  } finally {
    await client.close();
  }
}
