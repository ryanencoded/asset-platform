## Getting Started ##
This project serves to cater to customers in managing their assets out in the field. By using this software, they are able to easily keep track of incoming alerts and status of their assets. They also analyze and view metic data for each asset they have on site.

This is a stripped down version of the original platform, without the company data and is not powered by the backend. It is meant to give an idea of the structure, implementation, and overall architecture of the front-end.

## Login Credentials ##
The front-end does not really require certain credentials, but does validate what you type. The easiest way to gain access is to use the following credentials.

Username: testuser
Password: Test@1234

### System Overview ###
1. System Architecture
This project is built out of React in the front end. We utilize AWS serverless services and pull data from DynamoDB database in the back end. To manage the state and data flow throughout the application, Redux was implemented with the help of Saga to handle asynchronous requests.

+ Project Directory
Under the src folder, the project is structured to where developers can easily navigate between user interface components (under views), data related components (under data), global helpers (utils), and css styles (styles).

### Documentation ###
The following documentation gives you an overview of the application code and data services.

#### UI Components ####
- Data: [docs/Data.md](docs/Data.md)
- Imports: [docs/Imports.md](docs/Imports.md)
- Utils: [docs/Utils.md](docs/Utils.md)
- Views: [docs/Views.md](docs/Views.md)
#### API ####
- Alerts: [docs/api/alerts.md](docs/api/alerts.md)
- Assets: [docs/api/assets.md](docs/api/assets.md)
- Customers: [docs/api/cusotmers.md](docs/api/customers.md)
- IAM: [docs/api/iam.md](docs/api/iam.md)
- Metrics: [docs/api/metrics.md](docs/api/metrics.md)
- Regions: [docs/api/regions.md](docs/api/regions.md)
- Sites: [docs/api/sites.md](docs/api/sites.md)

### Available Scripts

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

##### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
