# Views Folder
Each folder under the views folder
1. Alerts
 -> Snippets
    -> AlertCount
    This component displays the number of alerts for a certain asset
    -> AlertDropdownList
     This component renders out the dropdown alert list in the header. It displays the asset name, asset state, and description of the alert.
    -> AlertIcon
    This component is just the Alerts icon that displays a badge of the count of alerts
 -> AlertList
 This component is the view of the alerts. It displays rows of alerts in a table format. The information that can be accessed is the Asset name, asset type, description, and priority relating to the alert.
 -> Alerts
 This component renders out the layout of the alerts page and renders out the children inside.

 + App
 This folder holds the global file of private routes that can be accessed if the user is authenticated. The app will fetch data every five minutes to update data that is coming in.

 + Assets
 -> Snippets
    -> AssetCard
    This component gives an overview information about an asset:
    * The asset type
    * The number of alerts
    * The state its in
    * How long ago it was updated
    * A fusion chart displaying a high priority metric
    * Buttons for a deeper dive into asset information
    -> AssetHeader
    This component shows the basic info of an asset. It renders on the detail view of an asset. It shows
    * The asset type
    * Asset Name
    * The state it is in
    * Uptime
    * How long ago it's been updated
    -> AssetName
    -> AssetOverview
    -> AssetTechnology
    This component receives props of the asset type. This type determines what icon is then rendered to indicate what type it is.
 -> AssetDetail
 This component shows a more detail view of an asset. It contains the layout to render out a Fusion chart (to visualize a specific metric), a Metrics List (buttons of metrics and their reading), and asset alerts (alerts pertaining to the asset)
 -> Assets
 This component is layout to render out the asset children. This is the page rendered with the route
 -> AssetsGrid
 Displays the all the assets into cards for a grid view
 -> AssetsList
 Displays the all the assets into rows for a grid view

 + Auth
 This folder deals with the authentication side of the application: signing up users, logging in users, resetting user passwords.
 -> AccountManager
    -> AccountManager
    This component renders the layout of the components that enables the user to verify account and confirm account.
    -> Confirm Account
    This component renders out an input to verify user account when signing up.
    -> VerifyAccount
    This component renders out an input to allow the user to enter their username to send a code to the user email for verification.
 -> PasswordWizard
 This folder contains components that enables users to reset their password if they forgot it.
    -> ForgotPassword
    This component renders out an input field for users to type in their username to request a reset on their password.
    -> PasswordWizard
    This file contains the layout of the page users go to when they want to reset their password. The children includes Forgot password and reset password
    -> ResetPassword
    This component renders out an input field for users to enter the code sent to their email on request of a password reset. It also renders out a field for the user to type in a new password.
 -> Auth
 This file is the layout that contains the Sign up and login components. It lies at the global level with App and does not allow user to access the App route if the user is not authenticated.
 -> AuthHeader
 This functional component is the header of the Auth components: It contains the stallion logo.
 -> Login
 This component renders out text inputs for users to enter their username and password to log into the application.
 -> Marketing
 This component is purely presentational and displays a marketing statement.
 -> SignUp
 This component renders out a form for users to enter information to sign up into AWS and application. It takes this information:
 * name
 * Email
 * Phone number
 * Username
 * Password.
 This information is then saved into the user pool of Cognito AWS
 -> Test
 This component renders out credentials for you (the developer) to be able to test API endpoints.

 + Global
 -> Global.js
 This component holds the global routes. This includes authentication for logging in, password change, and App. The user cannot access app unless they are authenticated. After logging in, they are automatically redirected to App.

 + Home
 This folder contains components dealing with the dashboard/home. This is the page users will see upon logging in.
 -> Snippets
    -> Header
    This component renders out a component that greets the user with their name and the today's date.
 -> Home
 This component renders out the main layout for the dashboard.

 + Layout
 This folder contains components that are in the global view of the App.
 -> Header
 This is a fixed header throughout every view of App. It contains a navigation bar with a dropdown of alerts for the user, and a profile dropdown which displays basic user info. (Name, phone, email)
 -> SideBar
 The SideBar is a component on the App global view. It will render out a side navigation with easy access links to different views including assets and settings.

 + Metrics
 This folder has the components that pertains to metrics and data. It takes data and renders it out to a user friendly format.
 -> MetricButton
 This component receives props of the metric label and its reading, and renders it out in a pretty button with ripple effects.
 -> MetricsList
 By pulling metrics data from the store, this component then renders out a list of metric buttons in two columns.

+ Profile
This folder has the components that contains personal user information.
-> ProfileDropdown
This component is a dropdown from the header. It lists out the user's name, email and phone with an option of editing their information in the AWS. This is also where the user logs out.
-> ProfileSettings
This component lies in the Settings page. It renders out text fields that allows users to change their personal information including their name and password.  

+ Settings
This folder contains all the components that allow users to change their app preferences.
-> CommunicationSettings
This component holds the layout for the right side of the settings page. It contains settings that pertains to users opting in for notifications through their mobile device or email.
-> EmailSettings
This component contain input fields for users to have the ability to change their email. Upon change, the format of the email is validated and if the input doesn't match the email in AWS, the user can save their new email. The user must then verify their new email if they would like to opt in into notifications. Therefore, this component also renders out an input field for a code to verify.
-> NotificationSettings
This component renders out a toggle switch for users to opt into mobile and email. The switch will be disabled if their email and phone number is not verified
-> Phone Settings
This component contain input fields for users to have the ability to change their phone number. Upon change, the format of the phone number is validated and if the input doesn't match the number in AWS, the user can save their new phone number. The user must then verify their number if they would like to opt in into notifications. Therefore, this component also renders out an input field for a code for verification.
-> Settings
This component serves as a layout for the settings page. It holds the profile settings on the left, and notification settings on the right.
