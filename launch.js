const {BaseCluster} = require("kurasuta");
const {Logger} = require("gcommands");

module.exports = class extends BaseCluster {
	launch() {
		Logger.info(`[Kurasuta] Launching cluster ${this.id}`);
		this.client.login();
	}
}
