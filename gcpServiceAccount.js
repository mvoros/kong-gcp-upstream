const { JWT } = require("google-auth-library");
const fs = require("fs");

class GCPServiceAccount {
	constructor(config) {
		this.config = config;
	}

	async access(kong) {
		kong.log.info(`Loading key ${this.config.private_key}`);

		const rawdata = fs.readFileSync(this.config.private_key);
		const key = JSON.parse(rawdata);

		kong.log.info(`Scope ${this.config.scope}`);
		const client = new JWT();
		client.fromJSON(key);
		client.scopes = [this.config.scope];
		const token = await client.authorize();

		//Set HTTP header
		await kong.service.request.setHeader("Authorization", `Bearer ${token.id_token}`);
	}
}

module.exports = {
	Plugin: GCPServiceAccount,
	Schema: [{ private_key: { type: "string" } }, { scope: { type: "string" } }],
	Version: "0.1.0",
	Priority: 0
};
