export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "adminonlyauth3b4acc7c": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        },
        "userPoolGroups": {
            "adminGroupRole": "string"
        }
    },
    "function": {
        "adminAPIFunc": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "adminActions": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}