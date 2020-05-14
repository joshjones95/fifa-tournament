# FIFA Tournament App

## GraphQL
What is GraphQL? - https://graphql.org/

### GraphQL Adaptor
To connect to a GraphQL endpoint, apollo is used. For more information on apollo client - https://www.apollographql.com/docs/react/

In order to save time defining GQL schema types and developing hooks, https://graphql-code-generator.com is used to automatically generate these for you. To get started with GraphQL in this application, simply rename the codegen.yml.example file (dropping the .example), point to your schema and start adding the desired queries, mutations or subscriptions to the graphql folder. 

## Environment Variables
There is two environment variables provided by default **PUBLIC_URL** and **NODE_ENV**. In order to add any further environment variables, they must be prefixed with **REACT_APP_**. For further information, check out reacts official documentation - https://create-react-app.dev/docs/adding-custom-environment-variables/

Below is a list of the custom variables used in this application.

| Envrionment Variable        | Description           |
| --------------------------- | --------------------- |
| REACT_APP_GRAPHQL_API       | The GraphQL endpoint that data will be consumed from. |

*Rename the .env.example to .env to get started, using the table above and react app documentation as reference.*