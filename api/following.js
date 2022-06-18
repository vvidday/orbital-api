import { client } from "../setup";

export default async function handler(req, res) {
    if (req.query.id === null) {
        res.send("");
    }
    try {
        const id = req.query.id;
        let result;
        if (req.query.token != null) {
            result = await client.v2.following(id, {
                asPaginator: true,
                pagination_token: req.query.token,
            });
        } else {
            result = await client.v2.following(id, { asPaginator: true });
        }
        res.json(result);
    } catch (error) {
        res.send(error);
    }
}
