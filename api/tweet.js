import axios from "axios";

const URL = "https://api.twitter.com/2/tweets";

export default async function handler(req, res) {
    if (req.query.id === null) {
        res.send("");
    }
    try {
        const data = await axios.get(URL, {
            params: req.query,
            headers: { Authorization: `Bearer ${process.env.BEARER}` },
        });
        res.json(data.data);

        //res.json(tweet.data);
    } catch (error) {
        res.send(error);
    }
}
