// transfer 0.1 sol instruction data
// { accounts: [ 0, 1 ], data: '3Bxs411Dtc7pkFQj', programIdIndex: 2 }
const web3 = require('@solana/web3.js')
const { base58 } = require('ethers/lib/utils')
let transfer_sol_data_bs58 = '3Bxs411Dtc7pkFQj'

// decode with base58
let decode_res = base58.decode(transfer_sol_data_bs58)

console.log(
	'decode instruction data : ',
	Buffer.from(decode_res).toString('hex')
)
// 0200000000e1f50500000000

// decode use solana/web3.js
let transaction_instruction = {
	keys: [
		new web3.PublicKey('aRsimwXz2pU8Sr1VQzEjykiEU4wmRhtxe3xB2B7k2j6'),
		new web3.PublicKey('9W959DqEETiGZocYWCQPaJ6sBmUzgfxXfqGeTEdp3aQP'),
	],
	data: base58.decode(transfer_sol_data_bs58),
	programId: new web3.PublicKey('11111111111111111111111111111111'),
}
let decode_with_solana = web3.SystemInstruction.decodeTransfer(
	transaction_instruction
)

console.log('decode result: ', decode_with_solana)
