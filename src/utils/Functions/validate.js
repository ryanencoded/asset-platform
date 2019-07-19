/* Public functions to validate input forms */

export function validateInput(type, value){
  let status = false, message = ''

  switch (type) {
    case "name":
      status = /\w{2,}\s\w{2,}/.test(value)
      message = (status ? '' : 'Please provide your first and last name')
      break;
    case "email":
      status = /^\S+@\S+$/.test(value)
      message = (status ? '' : 'Invalid email')
      break;
    case "phone":
      status = (/^\+1{1}\d{10}$/.test(value))
      message = (status ? '' : 'Invalid phone number')
      break;
    case "username":
      status = (/^.{6,}$/.test(value))
      message = (status ? '' : 'Username needs to be 6 characters long')
      break;
    case "password":
      status = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/.test(value))
      message = (status ? '' : 'Password needs to contain an uppercase and lower case letter, a special character, and a number')
      break;
    case "code":
      status = (/\d{5}/.test(value))
      message = (status ? '' : 'Code needs to be a 5 digit number')
      break;
    default:
      status = true
      message = ''
  }

  return {
    status: status,
    message: message
  }

}
