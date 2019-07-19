import Amplify from 'aws-amplify';
Amplify.configure({
    Auth: {
        identityPoolId: 'us-east-1:a5c98aef-dd8c-4e05-be89-44c6a5b768b1',
        region: 'us-east-1',
        userPoolId: 'us-east-1_o6KpXPqhh',
        userPoolWebClientId: '75t5qfgeuj7u8k4jfda6qf790i'
    },
    API: {
        endpoints: [
            {
                name: "AssetsAPI",
                endpoint: "https://4t224bk0h6.execute-api.us-east-1.amazonaws.com/development"
            },
            {
                name: "IAMAPI",
                endpoint: "https://94agnkmjo1.execute-api.us-east-1.amazonaws.com/development/iam"
            },
            {
                name: "AlertsAPI",
                endpoint: "https://er4239433c.execute-api.us-east-1.amazonaws.com/development"
            },
            {
                name: "MetricsAPI",
                endpoint: "https://855sttz7x7.execute-api.us-east-1.amazonaws.com/development"
            },
            {
              name: "TypesAPI",
              endpoint: "https://53d5hrw73c.execute-api.us-east-1.amazonaws.com/development"
            }
        ]
    },
    Analytics: {
      disabled: true,
       AWSPinpoint: {
           appId: 'aee4a0d4c35d4f878da532be3131d13f',
           region: 'us-east-1'
       }
    }
});
