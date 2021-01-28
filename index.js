const Api = require("@cennznet/api").Api
const BN = require("bn.js")

const main = async () => {
	const api = await Api.create()

	// 2^64 should be accepted within a 128bit integer
	let num = (new BN(2)).pow(new BN(64)).sub(new BN(1)) // (2^52 - 1) seems to be the highest possible
	console.log("Number => "+num.toString());
	console.log((await api.rpc.cennzx.liquidityPrice.json(16001, num)).toHuman())

	process.exit()
}

main()
