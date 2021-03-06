# Orbital-API

Uses Vercel's [serverless functions](https://vercel.com/docs/concepts/functions/serverless-functions) to query the Twitter API.

Uses [twitter-api-v2](https://github.com/PLhery/node-twitter-api-v2) as a wrapper.

# API

## Endpoints

All endpoints are under /api/.

### GET userbyusername
Gets a user by username.

Endpoint: `api/userbyusername`

Params:
- `username: string`

Returns: JSON of response data

### GET usertimeline
Gets tweets from a user's timeline by user ID.

Endpoint: `api/usertimeline`

Params:
- `id : string`
- `exclude: enum(retweets, replies)` (Optional)

Returns: JSON of response data

### GET following
Gets accounts that the user is following, by user ID.

Endpoint: `api/following`

Params:
- `id : string`
- `token: string` (Optional) - Pagination token to get more than 100 results

Returns: `UserFollowingV2Paginator` in JSON format. Next token under `res["meta"]["next_token"]`