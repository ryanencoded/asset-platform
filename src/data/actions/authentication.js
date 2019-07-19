import * as types from 'data/constants/types';


export function verifyAccount(username) {
  return{
    type: types.VERIFY_ACCOUNT,
    username
  }
}

export function confirmAccount(username, code) {
  return{
    type: types.CONFIRM_ACCOUNT,
    username,
    code
  }
}

export function signupUser (user) {
  return {
    type: types.SIGNUP_USER,
    user
  }
};

export function loginUser(user) {
  return {
    type: types.LOGIN_USER,
    user
  }
};

export function logoutUser() {
  return {
    type: types.LOGOUT_USER
  }
}

export function currentUser() {
  return {
    type: types.CURRENT_USER
  }
}

export function fetchUserPermissions() {
  return {
    type: types.FETCH_USER_PERMISSIONS
  }
}

export function updateName(name) {
  return {
    type: types.UPDATE_NAME,
    name
  }
}

export function updateUserEmail(email) {
  return {
    type: types.UPDATE_EMAIL,
    email
  }
}

export function verifyUserEmail(email) {
  return {
    type: types.VERIFY_EMAIL,
    email
  }
}

export function confirmUserEmail(email, code) {
  return {
    type: types.CONFIRM_EMAIL_VERIFICATION,
    code: {code: code, email: email}
  }
}

export function updatePhone(phone) {
  return {
    type: types.UPDATE_PHONE,
    phone
  }
}

export function verifyPhone(phone) {
  return {
    type: types.VERIFY_PHONE,
    phone
  }
}

export function confirmPhone(phone, code) {
  return {
    type: types.CONFIRM_PHONE_VERIFICATION,
    code: {code: code, phone: phone}
  }
}

export function changePassword(passwords) {
  return{
    type: types.CHANGE_PASSWORD,
    passwords
  }
}

export function forgotPassword(username) {
  return{
    type: types.FORGOT_PASSWORD,
    username
  }
}

export function resetPassword(username, code, password) {
  return{
    type: types.RESET_PASSWORD,
    username,
    code,
    password
  }
}
