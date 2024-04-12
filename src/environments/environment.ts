/**
 * Consuming environment variables in an Angular application is not natively supported. That is why , in this case, we define the environments like a regular TypeScript object where the values are later replaced for the actual values (saved as github secrets) during the build in our CI/CD pipeline .
 * Trying to access process.env will first generate a TypeScript error because the global process variable is unknown to TypeScript and even if we get around it, the resulting JavaScript will not contain any value because it is read at runtime from the global context (window in the browser) which does not contain the process global variable!
 * This can also be achieved by using a custom  builder in Webpack: https://github.com/indepth-dev/community/blob/main/files/en-us/tutorials/angular/inject-environment-variables.md
 */

export const environment = {
  production: true,
  apiUrl: 'https://api.spoonacular.com/recipes/findByIngredients',
  apiKey: '3650c62bf1bb45eb97831cab46ea7aa2',
  // apiUrl: '__API_URL__',
  // apiKey: '__API_KEY__',
};
