

import * as discord from "discord.js"

declare module "skyapi.js" {
	export class Client {
		constructor(client: discord.Client, options: SkyapiOptions)

		autopost(options: AutopostOptions): Promise<boolean>;

		postStats(): Promise<boolean>;

	}

	interface SkyapiOptions {
		key: string;
	}

	interface AutopostOptions {
		interval: number;
		timeout: number;
	}
}