# dotenv

A simple dotenv plugin for the [Serverless](https://serverless.com/) framework.

## Getting started

```sh
npm install --save-dev serverless-dotenv
```

and in `serverless.yml`:

```yml
plugins:
  - serverless-dotenv
```

That's it. It will load all `.env` file's environment varibles into the Lambda functions when deployed.