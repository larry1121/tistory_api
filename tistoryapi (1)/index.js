// const functions = require('firebase-functions');
// const request = require('request');
// import firebase from "firebase/app";
// import "firebase/functions";
// exports.getAccessToken = functions.https.onCall((data, context) => {
//   const client_id = data.client_id;
//   const client_secret = data.client_secret.trim();
//   const redirect_uri = data.redirect_uri.trim();
//   const code = data.code.trim();

//   const url = "https://www.tistory.com/oauth/access_token";
//   const requestData = {
//     client_id: client_id,
//     client_secret: client_secret,
//     redirect_uri: redirect_uri,
//     code: code,
//     grant_type: "authorization_code"
//   };

//   return new Promise((resolve, reject) => {
//     request.post({url:url, form:requestData}, (error, response, body) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(body);
//       }
//     });
//   });
// });
