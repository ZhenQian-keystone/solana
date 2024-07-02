// https://solscan.io/tx/4VkVEYiRqS1y3XoMKXBXTRbffyjHkpj6LAz4N55K6oV4xCRQuowXDJHSPtgC6dtoaSrZ2NkNFkX83FYsovRRgVnH

const web3 = require('@solana/web3.js')

const connection = new web3.Connection(web3.clusterApiUrl('mainnet-beta'))

// tx hash
let tx_hash =
	'4VkVEYiRqS1y3XoMKXBXTRbffyjHkpj6LAz4N55K6oV4xCRQuowXDJHSPtgC6dtoaSrZ2NkNFkX83FYsovRRgVnH'

connection
	.getTransaction(tx_hash, {
		maxSupportedTransactionVersion: 0,
	})
	.then((tx) => {
		// get transaction
		let transaction = tx.transaction

		let signatures = transaction.signatures

		console.log('signatures: ', signatures)

		let message = transaction.message
		// console.log('message ===>  ', message)
		// for each message
		let message_header = message.header

		console.log('message_header: ', message_header)

		// account addresses == account kehys
		let account_addresses = message.staticAccountKeys
		console.log('message addresses ', account_addresses)

		// recent hash
		let recent_block_hash = message.recentBlockhash
		console.log('recent block hash ', recent_block_hash)

		// instructions
		let message_instructions = message.compiledInstructions

		console.log('instructions ', message_instructions)
	})

// signatures:  [
//     '4VkVEYiRqS1y3XoMKXBXTRbffyjHkpj6LAz4N55K6oV4xCRQuowXDJHSPtgC6dtoaSrZ2NkNFkX83FYsovRRgVnH'
//   ]
//   message_header:  {
//     numReadonlySignedAccounts: 0,
//     numReadonlyUnsignedAccounts: 2,
//     numRequiredSignatures: 1
//   }
//   message addresses  [
//     PublicKey [PublicKey(NjordRPSzFs8XQUKMjGrhPcmGo9yfC9HP3VHmh8xZpZ)] {
//       _bn: <BN: 5919998ccad85d7254856bde658b1926b77276f9c9f93d4713eec50c6f0cd4e>
//     },
//     PublicKey [PublicKey(ComputeBudget111111111111111111111111111111)] {
//       _bn: <BN: 306466fe5211732ffecadba72c39be7bc8ce5bbc5f7126b2c439b3a40000000>
//     },
//     PublicKey [PublicKey(YmirFH6wUrtUMUmfRPZE7TcnszDw689YNWYrMgyB55N)] {
//       _bn: <BN: 8239266ec3629985acb2ec387b47c3c3ca057181773835b4f0e99ab4f065e7d>
//     }
//   ]
//   recent block hash  EBkkMFBA3ArcDiCkQtFyP7omptVXKoK23joaJoDUDqTF
//   instructions  [
//     {
//       programIdIndex: 1,
//       accountKeyIndexes: [],
//       data: <Buffer 02 8c 45 08 00>
//     },
//     {
//       programIdIndex: 1,
//       accountKeyIndexes: [],
//       data: <Buffer 03 20 86 01 00 00 00 00 00>
//     },
//     {
//       programIdIndex: 2,
//       accountKeyIndexes: [
//         29, 31, 30,  0,  4,  5,  8,  7,  9,  6,
//         25, 28, 25, 20, 27, 17, 18, 12, 15, 26,
//         11, 10, 14, 19, 16, 16, 32,  7, 13,  0,
//         24,  3, 21,  0, 13,  4, 23, 22, 25
//       ],
//       data: <Buffer 5b bf fb f7 92 f6 0a a2 08 4d 23 01 00 00 00 00 ad 88 c1 19 00 00 00 00 03 02 01 07 00 00 00 00 00 00 01 01 00 00 00 00 00>
//     }
//   ]
