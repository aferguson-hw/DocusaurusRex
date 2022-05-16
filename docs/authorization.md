---
sidebar_position: 2
title: Authorization API
slug: /api/authorization
---

:::info

Take a look at the full Authorization API specification [here](/api/authorization/spec).

:::

## Authorization API
The Authorization API implements the OAuth 2.0 authorization and controls access to the Healthwise APIs. Your application must have an access token from the Authorization API before that application can use any other Healthwise APIs.

URL: `https://auth.healthwise.net/`

## Requesting an Access Token
An Access Token can be requested from `https://auth.healthwise.net/oauth2/token`.

This request creates an access token from the provided credentials. These tokens are used to grant access to Healthwise APIs and must be provided with each API request. A `client id` and `client secret` must be provided in the request for an access token. The aforementioned values are provided by Healthwise for accessing the APIs.

## Sample Requests

Using HTTP
```
    POST /oauth2/token HTTP/1.1
    Host: auth.healthwise.net
    Content-Type: application/x-www-form-urlencoded
    Authorization: Basic czZCaGRSa3F0MzpnWDFmQmF0M2JW
    grant_type="client_credentials"&scope="*"
```

Using CURL
```
    curl -k -i -X POST https://auth.healthwise.net/oauth2/token
        --header "Content-Type: application/x-www-form-urlencoded"
        --user "your client id:your client secret"
        --data "grant_type=client_credentials&scope=*"
```

Using JavaScript
```javascript
    function getBearerToken(clientId, clientSecret) {
        request.post({
            uri: 'https://auth.healthwise.net/oauth2/token',
            json: true,
            headers: {
                'Authorization': 'Basic' + new Buffer(clientId + ':' + clientSecret).toString('base64'),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body : {
                'grant_type': 'client_credentials',
                'scope': '*',
                'expiration': 86400
            }
        },
        (err, res, body) => console.log(body))
    }
```