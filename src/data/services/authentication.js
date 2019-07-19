import { Auth } from 'aws-amplify';
import { persistor } from 'data/services/global'
import { API } from 'aws-amplify';

export const signupUserService = ({user}) => {
  return Auth.signUp({
      username: user.username,
      password: user.password,
      attributes: {
        email: user.email,
        phone_number: user.phone,
        name: user.name,
        "custom:opted_in": "false"
      }
  }).then(userinfo => {
    return {
        verifiedAccount: true,
        confirmedAccount: userinfo.userConfirmed,
        userId: userinfo.userSub,
        username: userinfo.user.username,
        name: user.name,
        email: user.email,
        phone: user.phone
    }
  })
}

export const verifyAccountService = ({ username }) => {
  return Auth.resendSignUp(username).then(status => {
    return{
      destination: status['CodeDeliveryDetails']['Destination'],
      type: status['CodeDeliveryDetails']['AttributeName'],
      verifiedAccount: true,
      confirmedAccount: false,
      username: username
    }
  })
}

export const confirmAccountService = ({ username, code }) => {
  return Auth.confirmSignUp(username, code).then(status => {
    return {
      verifiedAccount: false,
      confirmedAccount: true,
      username: username
    }
  })
}

export const loginUserService = ({ user }) => {
  return {
    confirmedAccount: true,
    isAuthenticated: true,
    userId: '12345637-12354-assdfgs-asdsdsdsd',
    username: 'jsmith',
    name: 'Jane Smith',
    email: 'jsmith@email.com',
    phone: '+18325551234',
    phoneVerified: false,
    emailVerified: true,
    optedIn: false
  }
};

export const logoutUserService = ({ user }) => {
    return persistor.purge().then(() => {
      return {
        isAuthenticated: false
      }
    })
};

export const currentUserService = () => {
  return {
    confirmedAccount: true,
    isAuthenticated: true,
    userId: '12345637-12354-assdfgs-asdsdsdsd',
    username: 'jsmith',
    name: 'Jane Smith',
    email: 'jsmith@email.com',
    phone: '+18325551234',
    phoneVerified: false,
    emailVerified: true,
    optedIn: false
  }
};

export const forgotPasswordService = ({ username }) => {
  return Auth.forgotPassword(username).then(status => {
    return{
      destination: status['CodeDeliveryDetails']['Destination'],
      type: status['CodeDeliveryDetails']['AttributeName'],
      forgotPassword: true,
      resetPassword: false,
      username: username
    }
  })
}

export const resetPasswordService = ({ username, code, password }) => {
  return Auth.forgotPasswordSubmit(username, code, password).then(status => {
    return{
      resetPassword: true,
      forgotPassword: false,
      username: username
    }
  })
}

export const fetchUserPermissionService = () => {
  return API.get('IAMAPI', '/permissions')
    .then(response => response.data)
}


/* Rewrite these */
export const updateNameService = ({ name }) => {
  return Auth.currentAuthenticatedUser()
    .then(user => {
      return Auth.updateUserAttributes(user, {
        name: name
      })
        .then((result) => {
          return name
        })
    })
}

export const updateEmailService = ({ email }) => {
  return Auth.currentAuthenticatedUser()
    .then(user => {
     return  Auth.updateUserAttributes(user, {
        email: email,
        email_verified: false
      })
        .then((result) => {
          return email
        })
    })
};

export const verifyEmailService = ({email}) => {
  return Auth.verifyCurrentUserAttribute(email)
}

export const confirmEmailService = ({ code }) => {
  return Auth.verifyCurrentUserAttributeSubmit(code.email, code.code)
    .then(() => {
      return Auth.currentAuthenticatedUser().
        then(user => {
          return Auth.updateUserAttributes(user, {
            email_verified: true
          })
        })
    })
}

export const updatePhoneService = ({ phone }) => {
  return Auth.currentAuthenticatedUser()
    .then(user => {
      const maskedForCognito = `+1${phone.slice(4,7)}${phone.slice(9,12)}${phone.slice(13)}`;
      return Auth.updateUserAttributes(user, {
        phone_number: maskedForCognito,
        phone_number_verified: false
      })
        .then((result) => {
          return maskedForCognito
        })
    })
}

export const verifyPhoneService = ({phone}) => {
  return Auth.verifyCurrentUserAttribute(phone)
}

export const confirmPhoneService = ({ code }) => {
  return Auth.verifyCurrentUserAttributeSubmit(code.phone, code.code)
    .then(() => {
      return Auth.currentAuthenticatedUser().
        then(user => {
          return Auth.updateUserAttributes(user, {
            phone_number_verified: true
          })
        })
    })
}

export const changePasswordService = ({ passwords }) => {
  return Auth.currentAuthenticatedUser()
    .then(user => {
      return Auth.changePassword(user, passwords.oldPassword, passwords.newPassword)
        .then(result => {
          return "Changed Password Successfully!"
        })
    })
}
