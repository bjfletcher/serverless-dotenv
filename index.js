const fs = require('fs');
const dotenv = require('dotenv');

module.exports = class ServerlessDotenv {
  constructor(serverless) {
    this.serverless = serverless;
    this.hooks = {
			'before:deploy:createDeploymentArtifacts': () => {
				const env = dotenv.parse(fs.readFileSync('.env'));
				Object.assign(this.serverless.service.provider.environment, env);
			}
    };
  }
}