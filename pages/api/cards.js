import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const { method, body, query } = req;

  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db("cards");
  const cardsCollection = db.collection("cards");

  switch (method) {
    case "POST":
      try {
        const { description, category } = body;
        if (!description || !category) {
          return res
            .status(400)
            .json({ message: "Faltan campos obligatorios" });
        }
        const newCard = await cardsCollection.insertOne({
          description,
          category,
        });
        return res.status(201).json(newCard);
      } catch (error) {
        return res
          .status(500)
          .json({ message: "Error al crear la tarjeta", error });
      }
      break;
    case "GET":
      try {
        const cards = await cardsCollection.find().toArray();
        return res.status(200).json(cards);
      } catch (error) {
        return res
          .status(500)
          .json({ message: "Error al obtener las tarjetas", error });
      }
  }
}
