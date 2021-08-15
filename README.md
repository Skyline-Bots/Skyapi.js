<div align="center">
  <img src="https://skylinebots.ml/static/img/logo_circle.png" width=156><br>
</div>

# Skyapi.js
An NPM package used to interact with the Skyline Bots API

---

# Installing
Install [NodeJS](https://nodejs.org)

---

# Using the package

JavaScript  

```js

// Post your stats to the site

const Skyline = require('skyapi.js')

const discord = require('discord.js')
const client = new discord.Client()

const skyline = new Skyline.Client(client, {
		key: "your-api-key-here"
	})

client.on('ready', () => {
  console.log("The client is ready")
  // post every 10 minutes
	skyline.autopost({ interval: 600000, /* 10 minutes */ timeout: 1.2e+6 /* 20 minutes */})
})

// Message event
client.on('message', (message) => {
	if (message.content == "!poststats") {
		skyline.postStats()
	}
})

```

TypeScript

```typescript
import * as skyline from "skyapi.js"

import { Client } from "discord.js"

const client = new Client()

const skyline = new skyline.Client(client, {
	key: "your-api-key-here"
})



```

---

# Items

## Features
The features of skyapi.js include:

- Post Server Count
- Webhook Compatibility

---