## Installation Instructions

In the project directory, you can run:

### `npm install`

Installs required dependencies.

### `npm start`

Runs the application in development environment on the available port. Default will be [http://localhost:3000]. If the port is being used by another application it will use the next available port.

### `npm run build`

Builds the app for production to the `build` folder

## Project Details

### Additional Dependencies

`react-bootstrap` `react-redux` and `@reduxjs/toolkit`

### Project Structure

`components` - contains shared components
`assets` - contains static assets like css, images etc
`config` - contains basic application configuration
`services` - contains functions to handle async web apis
`store` - entry point for redux store
`utils` - contains shared helper functions
`views` - contains wrapper components that relates to a specific route

### Info

- Used redux method `createApi` to fetch data from server and configured the store to get data in components
- There are two methods `getPayments` and `getPaymentsByPageIndex`. `getPayments` will be executed on dom load. Used a boolean to prevent the execution of `getPaymentsByPageIndex` initially.
- use local state filter so that filter can be preserved even if we are using the load more button.
- used a local state `payments` to store all the data that has been retrived from the api
- used another local state `filteredPayments` thats used to display filtered data.
- filtered data is binded to the frontend
- Load more button and filter header are seperate components that uses the data and events passed as props to the component
- `useEffect` hook is used multiple times to handle transformation of data in different scenarious and based on different inputs

### To be improved

- can be modularised even more
- scss can be used instead of css
- ux can be improved
