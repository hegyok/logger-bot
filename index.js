require("dotenv").config();
const {join} = require('path');
const {Logger} = require("gcommands");

const {ShardingManager} = require("kurasuta");
const bot = require("./src/app");
require("@aero/require").config(process.cwd(), true);

const {ipcSocket, intents} = require("./config.json");

const sharder = new ShardingManager(join(__dirname, 'launch'), {
	client: bot,
	token: process.env.TOKEN,
	ipcSocket,
	clientOptions: {
		intents
	}
}

sharder.spawn();

sharder.on("debug", message => {
	Logger.info(`[Kurasuta] ${message}`);
})
