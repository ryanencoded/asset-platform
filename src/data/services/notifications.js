import { Analytics, Auth } from 'aws-amplify';

export const notificationsAllowedService = async ({ status }) => {
  //Fetch the user info
  Auth.currentAuthenticatedUser().then((user) => {
    const userAttributes = {};
    Object.entries(user.attributes).forEach(([key, value]) => {
			userAttributes[key] = [`${value}`];
		})

    Analytics.updateEndpoint({
      address: user.attributes.email,
      channelType: "EMAIL",
      userId: user.attributes.sub,
      optOut: status ? 'NONE' : 'ALL',
      userAttributes
    })
    // 
    // Analytics.updateEndpoint({
    //   address: user.attributes.phone_number,
    //   channelType: "SMS",
    //   userId: user.attributes.sub,
    //   optOut: status ? 'NONE' : 'ALL',
    //   userAttributes
    // })

    Auth.updateUserAttributes(user, {
      "custom:opted_in": status ? "true" : "false"
    })

  })

  return status
}
