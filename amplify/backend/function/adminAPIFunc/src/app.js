/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

/* Amplify Params - DO NOT EDIT
	AUTH_ADMINONLYAUTH3B4ACC7C_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const express = require("express");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const { CognitoIdentityServiceProvider } = require("aws-sdk");
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();

//yours will be different 👇🏽 Make sure it matches above.
const userPoolId = process.env.AUTH_ADMINONLYAUTH3B4ACC7C_USERPOOLID;

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.post("/create-user", async function (req, res) {
  // Add your code here
  const { email, username } = req.body;

  try {
    await cognitoIdentityServiceProvider
      .adminCreateUser({
        UserPoolId: userPoolId,
        Username: username,
        DesiredDeliveryMediums: ["EMAIL"],
        UserAttributes: [
          {
            Name: "email",
            Value: email,
          },
        ],
      })
      .promise();
  } catch (e) {
    console.log(e);
  }
  res.json({ success: "post call succeed!" });
});

app.listen(3000, function () {
  console.log("App started");
});

module.exports = app;
