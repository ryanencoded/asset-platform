# Data Folder
This folder contains the data flow of the application. For this application Redux is used to manage the state and storing of data to and from AWS. For asynchronous requests, Saga middleware is utilized.
## Data directory
The folders are divided into their roles of data management.

1. actions
The actions folder contain functions that handles dispatches by the user.
-> alerts: contains actions dispatched pertaining to all alerts for the user, or alerts for an asset
##### Functions
* fetchAlerts: fires off a type to fetch alerts for the user.

-> assets: contains actions dispatched pertaining to user's assets
##### Functions
* fetchAssets: this fires off to fetch all the assets of a user. This is done when a user logs into the application and every five minutes.

-> authentication: these actions are dispatched when the users are getting authenticated and or updating data in the Cognito UserPools
##### Functions
* verifyAccount: this action is dispatched when the user is signing up. This action sends a code to the user's email to verify their account.
* confirmAccount: After prompting a user to verify their email upon signing up, this action is dispatched when the user enters the code to verify their account.
* signUpUser: This action is dispatched after the user fills out the form to sign up. This calls to sign up the user into the Cognito User pool
* loginUser: This function is dispatched when logging in the user. This will ultimately fetch for the user information and save it into redux.
* currentUser: Dispatches to fetch information and attributes about the user
* updateName: Dispatches to update the name in Cognito when a user wants to change their name in settings
* updateUserEmail: Dispatches to update user's email in Cognito when user saves a new email.
* verifyUserEmail: Dispatches after a new email is saved into Cognito. Will dispatch to send a code to their new email to verify.
* confirmUserEmail: After user receives a code to verify their new email, this will send information to Cognito to inform that the new email is verified. This will update the user info in the state as well
* updatePhone: Dispatches to update user's phone number in Cognito when user saves a new phone number.
* verifyPhone: Dispatches after a new number is saved into Cognito. Will dispatch to send a code to their new number to verify.
* confirmPhone: After user receives a code to verify their new number, this will send information to Cognito to inform that the new number is verified. This will update the user info in the state as well
* changeOptInState: this will dispatch a function to inform the amplify to update user endpoint to allow notifications. This will also change the opt in state of a user in redux
* changePassword: Dispatches to change user password in Cognito
* forgotPassword: Dispatches to prompt  AWS to send a code to user email to change password
* resetPassword: Dispatches after the username enters the code to reset his/her password. This will reset the password to a new one.

-> metrics: These actions are dispatched to receive data about asset metrics
##### Functions
* fetchMetrics: this is dispatched while assets are being fetched to fetch metrics for each asset and store it into store
* selectMetric: this is dispatched when a specific metric is being selected to be visualized  

-> utils: These functions are dispatched throughout the application that help in many views
###### Functions
* showMessage: this dispatches when a message needs to be displayed in a snackbar
* showLoading: This will dispatch a loading signal on components wrapped by a loading component
* toggleView: Dispatches for views that have options for viewing information in a list view or grid view. This will toggle between the views.

+ Reducers:
The reducers holds the previous and new states of the application.

+ Sagas:
Sagas folder holds a watchers file to watch actions being dispatched. If the action has an asynchronous task, the saga will dispatch another function to handle the task and then send the result to the reducer after the task is completed.

-> alerts  
* fetchAlertsSaga: watches for fetchAlerts to be dispatched and then calls the asynchronous task to fetch all alerts from the database and then returns the alerts to the reducer

-> assets
* fetchAssetsSaga: called when assets fetch is fired off. Gets all the assets from the database and then stores the data into the store. If there's an error, it calls for an error message to stored and displayed in the snackbar

-> authentication
* verifyAccountSaga: calls to verify account by sending code to user email
* confirmAccountSaga: calls to confirm the user account in AWS by sending the code the user entered
* signUpSaga: calls the service to sign up the user into AWS Auth and save user information
* loginSaga: calls the service to log the user into AWS Auth
* logoutSaga: calls the service to log user out of AWS Auth
* currentUserSaga: calls the service to return user information about the user currently logged in
* forgotPasswordSaga: calls a service to send an email with a code to reset the user password
* resetPasswordSaga: This calls a service with the new password and if successful the snackbar will show a success message. If not, it will show an error message.
* changePasswordSaga: calls the change password service when updating passwords in the settings page. It'll return an error message to reducer if not successful
* updatenameSaga: Calls the service to update the user name in Cognito.
* updateEmailSaga: calls the service to update email in Cognito, and changes the state of email verification to false. This will prompt users to verify their email.
* verifyEmailSaga: Calls the service to send code to the new email to verify it. This will return emailAwaitingVerification to the reducer to let the UI know to render out the input field for the code
* confirmEmailSaga: Calls the service to confirm user email with the code entered. This will send back to the reducer that email is now verified.
* updatePhoneSaga: calls the service to update phone number in Cognito, and changes the state of phone number verification to false. This will prompt users to verify their phone number.
* verifyPhoneSaga: Calls the service to send code to the new phone number to verify it. This will return phoneAwaitingVerification to the reducer to let the UI know to render out the input field for the code
* confirmPhoneSaga: Calls the service to confirm user phone number in Cognito with the code entered. This will send back to the reducer that phone number is now verified.

-> metrics
* fetchMetricSaga: calls a service to fetch metrics of a particular asset passed in the payload. It then sends this data to the reducer
* selectMetricSaga: calls a service to store a specific metric data as current selected metric.

-> notifications
* notificationsSaga: sends a service to opt the user into all types of notifications or opt out. It will return to the reducer if the user is opted in or out of notifications.

+ services
The services folder holds the functions that handles these asynchronous tasks.

-> alertAlerts
* fetchAlerts: This service does a get request from the API to fetch all alerts and returns that data

-> assets
* fetchAssets: This service does a get request from the API to fetch all assets and returns that data
* fetchAssetService: This service does a get request from the API to get information about a specific asset and returns that data

-> authentication
* signupUserService: this service signs the user up in aws amplify with their username, password, and attributes. Then returns this data to the reducer.
* verifyAccountService: this service prompts aws to resend the code to the email attached to the username.
* confirmAccountService: this service confirms user sign up with the username and code in the payload
* loginUserService: this service logs the user into AWS and returns personal information about the user.
* logoutUserService: logs the user out of AWS
* currentUserService: gets information about the user currently logged into Auth and returns the personal information.
* forgotPasswordService: this services calls an amplify method to send a code to the email connected to the username in the payload
* resetPasswordService: this service resets the password in Cognito by submitting the code for verification, username, and new password.
* updateNameService: this service updates the name attribute in Cognito
* updateEmailService: this service updates the email attribute in Cognito and returns the state of email_verified to false to prompt user to verify their email
* verifyemailService: Prompts amplify to verify the email attribute in Cognito by sending the a code to the user email
* confirmEmailService: This service will update user attribute of email_verified to true if the correct code was entered.
* updatePhoneService: this service updates the phone number attribute in Cognito and returns the state of phone_number_verified to false to prompt user to verify their phone number
* verifyPhoneService: Prompts amplify to verify the phone number attribute in Cognito by sending the a code to the user phone number
* confirmEmailService: This service will update user attribute of phone_ number_verified to true if the correct code was entered.
* changePasswordService: this service changes the password of the user by sending aws-amplify the old password and new password.

-> metrics
* fetchMetricsService: this service hits the metrics endpoint on the API to pull back the metrics for a specific asset

-> notifications
* notificationService: this service calls the AWS Analytics to opt users into and out of notifications.

+ store
The store holds the configuration of the store which we can export globally. It also holds the initial state of the application
