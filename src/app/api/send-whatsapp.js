import Twilio from "twilio";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI);
const twilioClient = new Twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

export default async function handler(req, res) {
  try {
    await client.connect();
    const db = client.db("jobMailer");
    const contacts = await db.collection("contacts").find().toArray();

    for (const contact of contacts) {
      if (contact["Phone"]) {
        await twilioClient.messages.create({
          from: process.env.TWILIO_WHATSAPP_NUMBER,
          to: `whatsapp:${contact["Phone"].replace(/\s/g, "")}`,
          body: `Hello, we have a new job opening at your company.`,
        });
      }
    }

    res.status(200).json({ message: "WhatsApp messages sent!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  } finally {
    await client.close();
  }
}
