import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const { method, body, query } = req;

  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db("users");
  const usersCollection = db.collection("users");

  switch (method) {
    case "POST":
      try {
        const { username, avatar, email } = body;
        if (!username || !avatar || !email) {
          return res
            .status(400)
            .json({ message: "Faltan campos obligatorios" });
        }
        const newUser = await usersCollection.insertOne({
          username,
          avatar,
          email,
        });
        return res.status(201).json(newUser);
      } catch (error) {
        return res
          .status(500)
          .json({ message: "Error al crear el usuario", error });
      }
      break;
    case "GET":
      try {
        const users = await usersCollection.find().toArray();
        return res.status(200).json(users);
      } catch (error) {
        return res
          .status(500)
          .json({ message: "Error al obtener los usuarios", error });
      }
  }
}
