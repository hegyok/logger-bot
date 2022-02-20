const {GClient, Logger} = require("gcommands");
const {join} = require("path");
const {intents} = require("../config.json");
class bot extends GClient {
	constructor(options) {
		super({
			dirs: [
				join(__dirname, 'commands'),
				join(__dirname, 'listeners')
			],
			intents,
			...options,
			unknownCommandMessage: true,
			devGuildId: '886145718195208242',
			messageSupport: false
		})
	}
	login() {
		this.logger = Logger;
		this.logger.info(`[Discord] Attempting to login on shards [${this.options.shards.join(", ")}].`);
		super.login(process.env.TOKEN);
	}
}

process.on("uncaughtException", console.error);
process.on("unhandledRejection", console.error);

module.exports = bot;
