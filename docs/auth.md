---
sidebar_position: 2
title: Authorization
---

The Healthwise APIs and services are secured through the OAuth 2.0 Authorization Framework. The OAuth framework is a widely adopted standard used to control access to HTTP services.

Access to any Healthwise API requires an access token with the appropriate scopes. An access token is requested from the Healthwise [Authorization API](/api/authorization) by the supported OAuth flows. The access tokens issued by the Authorization API follow the JSON Web Token (JWT) standard.

## Retrieving a Client ID and Client Secret
In order to get a Client ID and Client Secret, contact your Healthwise Account Manager to register your application. Your Healthwise account manager will assist you in setting up access to the Healthwise API solution and obtaining a client ID and secret. These credentials authorize your application to access the Healthwise APIs. Your client credentials must be kept private. Consider these credentials the username and password for your organization to access the Healthwise APIs. Make sure these credentials are not exposed to individuals outside your organization, including your Healthwise account manager. 

:::warning

Do not include your client credentials in a config file in a client side JavaScript application.

:::

## Obtaining an Access Token
Once you have a Client ID and Client Secret, to obtain an access token, you can send a POST request to the Authorization API and exchange a Base64 encoded value of your client id and secret for that access token.

## The Access Token Response
The response for a successful token request includes an access token that you can now use to access Healthwise services. Along with the access token, the response informs you when the token expires. The following code sample shows an example response.

```json
{
    "access_token": "eyJ0eXAiOiJKV1QiLA0KICJhbGciOiJIUzI1NiJ9.eyJ....",
    "token_type": "Bearer",
    "expires_in": 86400
}
```

## Access Token Information
The above response highlights a few crucial details
- The access token is a JSON Web Token (JWT)
- The access token that is issued is a bearer token
- Only the owner of the token has access to the privileges that are granted to the token
- The requestor of the token can specify the epiration time, not to exceed 24 hours

## When your token expires
While using your access token, you must monitor the token and request a new one when the token expires.

To determine when your token expires you have a few options
* Look at the expires_in property included in the token response
* Peer into the JWT and refer to the `exp` claim to get the expires_in value

Optionally, you could request a new token with each call.