// app.js
const appName = process.env.APP_NAME || 'Unknown';
const environment = process.env.ENVIRONMENT || 'Unknown';

console.log(`Running ${appName} in ${environment} environment.`);