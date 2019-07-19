import {
  put,
  call,
  all
} from 'redux-saga/effects';
import {
  signupUserService,
  loginUserService,
  logoutUserService,
  currentUserService,
  updateEmailService,
  verifyEmailService,
  confirmEmailService,
  updatePhoneService,
  verifyPhoneService,
  confirmPhoneService,
  changePasswordService,
  forgotPasswordService,
  resetPasswordService,
  verifyAccountService,
  confirmAccountService,
  updateNameService,
  fetchUserPermissionService,
} from 'data/services/authentication';
import {
  fetchUserServicesService
} from 'data/services/iam'

import * as types from 'data/constants/types';


export function* verifyAccountSaga(payload) {
  try {
    const status = yield call(verifyAccountService, payload);
    yield put({
      type: types.CURRENT_USER_SUCCESS,
      user: {
        verifiedAccount: status.verifiedAccount,
        confirmedAccount: status.confirmedAccount,
        username: status.username
      }
    })
    yield put({
      type: types.SHOW_MESSAGE,
      message: {
        text: `We sent an email to ${status.destination} with your confirmation code.`,
        type: 'success'
      }
    })
  } catch (error) {
    yield put({
      type: types.SHOW_MESSAGE,
      message: {
        text: error.message,
        type: 'error'
      }
    })
  }
}

export function* confirmAccountSaga(payload) {
  try {
    const status = yield call(confirmAccountService, payload);
    yield put({
      type: types.SIGNUP_USER_SUCCESS,
      user: {
        verifiedAccount: status.verifiedAccount,
        confirmedAccount: status.confirmedAccount,
        username: status.username
      }
    })
    yield put({
      type: types.SHOW_MESSAGE,
      message: {
        text: 'Wonderful! We have confirmed your account and you may now login.'
      }
    })
  } catch (error) {
    yield put({
      type: types.SHOW_MESSAGE,
      message: {
        text: error.message,
        type: 'error'
      }
    })
  }
}

export function* signupSaga(payload) {
  try {
    const user = yield call(signupUserService, payload);
    yield put({
      type: types.SIGNUP_USER_SUCCESS,
      user
    })
  } catch (error) {
    yield put({
      type: types.SHOW_MESSAGE,
      message: {
        text: error.message,
        type: 'error'
      }
    })
  }
}

export function* loginSaga(payload) {
  try {
    const user = yield call(loginUserService, payload);
    yield put({
      type: types.LOGIN_USER_SUCCESS,
      user
    })
  } catch (error) {
    yield put({
      type: types.SHOW_MESSAGE,
      message: {
        text: error.message,
        type: 'error'
      }
    })
  }
}

export function* logoutSaga(payload) {
  try {
    yield call(logoutUserService, payload);
    yield put({
      type: types.LOGOUT_USER_SUCCESS
    })
  } catch (error) {
    yield put({
      type: types.SHOW_MESSAGE,
      message: {
        text: error.message,
        type: 'error'
      }
    })
  }
}

export function* currentUserSaga(payload) {
  try {
    const user = yield call(currentUserService, payload);
    if (user && user.isAuthenticated) {
      yield put({
        type: types.CURRENT_USER_SUCCESS,
        user
      })
    } else {
      yield put({
        type: types.CURRENT_USER_FAILED
      })
    }
  } catch (error) {
    yield put({
      type: types.SHOW_MESSAGE,
      message: {
        text: error.message,
        type: 'error'
      }
    })
  }
}

export function* fetchUserPermissionSaga(){
  try {
    const [permissions, services] = yield all([
      call(fetchUserPermissionService),
      call(fetchUserServicesService)
    ]);
    yield put({
      type: types.FETCH_USER_PERMISSIONS_SUCCESS,
      permissions,
      services
    })

  } catch(error) {
    yield put({
      type: types.SHOW_MESSAGE,
      message: {
        text: error.message,
        type: 'error'
      }
    })
  }
}

export function* forgotPasswordSaga(payload) {
  try {
    const status = yield call(forgotPasswordService, payload);
    yield put({
      type: types.CURRENT_USER_SUCCESS,
      user: {
        forgotPassword: status.forgotPassword,
        resetPassword: status.resetPassword,
        username: status.username
      }
    })
    yield put({
      type: types.SHOW_MESSAGE,
      message: {
        text: `We sent an email to ${status.destination} with your password reset code.`,
        type: 'success'
      }
    })
  } catch (error) {
    yield put({
      type: types.SHOW_MESSAGE,
      message: {
        text: error.message,
        type: 'error'
      }
    })
  }
}

export function* resetPasswordSaga(payload) {
  try {
    const status = yield call(resetPasswordService, payload);
    yield put({
      type: types.CURRENT_USER_SUCCESS,
      user: {
        forgotPassword: status.forgotPassword,
        resetPassword: status.resetPassword,
        username: status.username
      }
    })
    yield put({
      type: types.SHOW_MESSAGE,
      message: {
        text: `We have updated your password.`,
        type: 'success'
      }
    })
  } catch (error) {
    yield put({
      type: types.SHOW_MESSAGE,
      message: {
        text: error.message,
        type: 'error'
      }
    })
  }
}


export function* changePasswordSaga(payload) {
  try {
    const success = yield call(changePasswordService, payload);
    yield put({
      type: types.SHOW_MESSAGE,
      message: {
        text: success
      }
    })
  } catch (error) {
      yield put({
        type: types.SHOW_MESSAGE,
        message: {
          text: 'Uh oh, please provide your correct current password. Log out and click Forgot your password? if you have forgotten your password.' ,
          type: 'error'
        }
      })
  }
}

export function* updateNameSaga(payload) {
  try {
    const name = yield call(updateNameService, payload);
    yield put({
      type: types.CURRENT_USER_SUCCESS,
      user: {
        name: name
      }
    })
    yield put({
      type: types.SHOW_MESSAGE,
      message: {
        text: 'Updated Successfully!',
        type: 'success'
      }
    })
  } catch (error) {
    yield put({
      type: types.SHOW_MESSAGE,
      message: {
        text: error.message,
        type: 'error'
      }
    })
  }
}

export function* updateEmailSaga(payload) {
  try {
    const email = yield call(updateEmailService, payload);
    yield put({
      type: types.CURRENT_USER_SUCCESS,
      user: {
        email: email,
        emailVerified: false
      }
    })
    yield put({
      type: types.SHOW_MESSAGE,
      message: {
        text: 'Updated Successfully!',
        type: 'success'
      }
    })
  } catch (error) {
    yield put({
      type: types.SHOW_MESSAGE,
      message: {
        text: error.message,
        type: 'error'
      }
    })
  }
}

export function* verifyEmailSaga(payload) {
  try {
    const success = yield call(verifyEmailService, payload)
    yield put ({
      type: types.VERIFY_EMAIL_SUCCESS,
      user: {
        emailAwaitingVerification: true,
      }
    })
  } catch (error) {
      yield put({
        type: types.SHOW_MESSAGE,
        message: {
          text: error.message,
          type: 'error'
        }
      })
  }
}

export function* confirmEmailSaga(payload) {
  try {
    const success  = yield call(confirmEmailService, payload)
    yield put ({
      type: types.CONFIRM_EMAIL_VERIFICATION_SUCCESS,
      user: {
        emailAwaitingVerification: false,
        emailVerified: true
      }
    })
  } catch(error) {
      yield put({
        type: types.SHOW_MESSAGE,
        message: {
          text: error.message,
          type: 'error'
        }
      })
  }
}

export function* updatePhoneSaga(payload) {
  try {
    const phone = yield call(updatePhoneService, payload);
    yield put({
      type: types.CURRENT_USER_SUCCESS,
      user: {
        phone: phone,
        phoneVerified: false,
        phoneAwaitingVerification: false
      }
    })
    yield put({
      type: types.SHOW_MESSAGE,
      message: {
        text: 'Updated number successfully!',
        type: 'success'
      }
    })
  } catch (error) {
    yield put({
      type: types.SHOW_MESSAGE,
      message: {
        text: error.message,
        type: 'error'
      }
    })
  }
}

export function* verifyPhoneSaga(payload) {
  try {
    const success = yield call(verifyPhoneService, payload)
    yield put ({
      type: types.VERIFY_PHONE_SUCCESS,
      user: {
        phoneAwaitingVerification: true,
      }
    })
  } catch (error) {
    yield put({
      type: types.SHOW_MESSAGE,
      message: {
        text: error.message,
        type: 'error'
      }
    })
  }
}

export function* confirmPhoneSaga(payload) {
  try {
    const success  = yield call(confirmPhoneService, payload)
    yield put ({
      type: types.CONFIRM_PHONE_VERIFICATION_SUCCESS,
      user: {
        phoneAwaitingVerification: false,
        phoneVerified: true
      }
    })
  } catch(error) {
      yield put({
        type: types.SHOW_MESSAGE,
        message: {
          text: error.message,
          type: 'error'
        }
      })
  }
}
