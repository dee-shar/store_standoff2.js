# store_standoff2.js
Web-API for [store.standoff2.com](https://store.standoff2.com) which is the offical website of Standoff 2 to buy  valute in the game

## Example
```JavaScript
async function main() {
	const { StoreStandoff2 } = require("./store_standoff2.js")
	const storeStandoff2 = new StoreStandoff2("userId")
	const accountInfo = await storeStandoff2.getAccountInfo()
  	console.log(accountInfo)
}

main()
```
