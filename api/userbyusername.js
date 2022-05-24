import { client } from "../setup";

export default async function handler(req, res) {
    if (req.query.username === null) {
        res.send("");
    }
    try {
    const user = await client.v2.userByUsername(req.query.username);
    res.json(user.data);
    } catch (error) {
        res.send(error);
    }
}