import { client } from "../setup";

export default async function handler(req, res) {
    if (req.query.id === null) {
        res.send("");
    }
    try {
    const id = req.query.id;
    delete req.query.id;
    const user = await client.v2.userTimeline(id, req.query);
    res.json(user.data);
    } catch (error) {
        res.send(error);
    }
}