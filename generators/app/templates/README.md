# <%= name %>

> <%= description %>

## Build Setup

``` bash
# Run for development environment at localhost:3000
$ npm run dev

# Build for production and launch a server.
$ npm run build
$ npm start
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://nuxtjs.org).

## Staging and Versioning

There is no staging and versioning to speak of in this marketing profile project. The CI/CD script at `.gitlab-ci.yml` will build, run code quality, and use Google App Engine to deploy on each commit to the `master` branch.

## TODO

> This section was generated by the Wagisus tool and should be removed after completion of the items.

### Setting up CI/CD

1. Set up a project with Google App Engine active (Node Flexible Environment) in-browser or otherwise.
2. Set up a new Service Account with the Editor role and extract a JSON key.
3. Set the JSON key as DEPLOY_KEY_FILE in GitLab.
4. Set the project ID as PROJECT_ID in GitLab.
5. Optionally, set up a custom domain in Google App Engine.

That's it, hopefully. Please raise an issue if this seems wrong.