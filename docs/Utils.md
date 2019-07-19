# Utils Functions
This document serves to provide information about the different functions that help throughout different views in the project.

## Auth
This folder describes functions that authorize users to be able to access the routes in the app.
### Components
1. AuthRequired
This function first checks to make sure that the user is logged into AWS. Then, it checks to see if the user has permissions to view a specific service (assets, alerts, sites.. etc) This is done by checking the user against his/her IAM permissions.
+ PrivateRoute
For components that are wrapped inside PrivateRoute, the component will first check to see if the user is logged in. If the user is authenticated and logged in, the component is rendered out with a transition. Else, the user is redirected to path '/auth/login' which prods them to log into the application.

## CopyToClipboard
This folder holds a function to copy to a highlighted section inside the input without having to do it manually.

## DataViews
This folder contains charts and graphs that allows us to visualize data that is used throughout the project.
### Components
1. FusionChart
This component receives props that contain a selected metric to display. It checks to see if the metric is undefined, then renders out a FusionChart with data that is passed to it. If the metric is undefined, or if doesn't contain a type of chart to display, the component renders out 'No Chart Available

### Functions
This folder holds functions that are commonly used throughout the project.
1. DateDisplay
This component takes a date formatted in AWS and transforms it to a user friendly date. This component uses moment, and the user is able to see how long ago the time was from now.
+ Overlay
This component lays over other components. It serves to position its children directly over the intended component. An example: When hovering over an asset, buttons are displayed over the asset.
+ sort
This file holds functions that sort an array by criteria.
+ ToggleView
This component is used to display different views of a route. These views can be toggled between grid view (displays information in cards) or list view (displays information in rows)
+ validate
This file holds a function that takes an input value and type, and validates the value to see if it is in the correct format depending on the type argument. If it is in an incorrect format, an error message is returned.

### Loading
This folder contains components that addresses the issue of a component still waiting for crucial API calls or waiting for the component itself to render.

### Views
These components are components that help us build out re-usable UI elements that are frequently used in the project.
#### Components
1. Filter
This component renders out two Fields that allows a filter function and a sort function. Users are able to select a sort method in the sort field, and multiple selections in the filter field. Functions are passed into the component to instruct what the fields should do with the selections.
+ SectionHeader
This component receives props of a title and description and displays it in a presentable way.
+ StateIndicator
This component is given props of the state of an artifact and an optional description to display. The color of an indicator icon is chosen depending on the state passed in. The indicator icon is then displayed with the label
+ ToolTipIcon
This component receives icon and text props. It wraps the icon with a tooltip that shows the text when hovering over the icon.
+ ValidateInput
This component renders an input field that validates the input dynamically to see whether it can be submitted to update a user attribute in Cognito. The input field rendered first checks to see if the input is in the correct format. Then the value is checked against the value in AWS. If it matches, it is not validated. If the format is correct and does not match the attribute in Cognito, the input field is rendered with input adornments (a check icon and a save icon).
