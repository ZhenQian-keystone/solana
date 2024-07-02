// https://solscan.io/tx/4VkVEYiRqS1y3XoMKXBXTRbffyjHkpj6LAz4N55K6oV4xCRQuowXDJHSPtgC6dtoaSrZ2NkNFkX83FYsovRRgVnH

// this is a versioned transaction
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

		let raw_message = transaction.message.serialize()

		// 800100020305919998ccad85d7254856bde658b1926b77276f9c9f93d4713eec50c6f0cd4e0306466fe5211732ffecadba72c39be7bc8ce5bbc5f7126b2c439b3a4000000008239266ec3629985acb2ec387b47c3c3ca057181773835b4f0e99ab4f065e7dc3e93416d06d11ad5352987624986db3240b02ea5cc42ba3c2e9f3a6e9bfe1c203010005028c45080001000903208601000000000002271d1f1e00040508070906191c19141b11120c0f1a0b0a0e13101020070d00180315000d04171619295bbffbf792f60aa2084d230100000000ad88c11900000000030201070000000000000101000000000004fdd750c4799429e7e17c0c7cf0a55a82d70846d1bc97665714af810651e8bb04010e060d010c0f0709209be863b24cb2303c7162670000dfaf3176a1ada32a0305df593d8a935c7dcd06038b8d118a8c0287868cb7d386ca1b4cb4125557bf989073c37d63ae73104247ee1280afa86a8ac75b0b9695938f97949a9192988d019bfddf37b259d3ceada480a9a43ba12f21bfd3d7afd64d35b9f0330f6645d3016f03969a9900
		console.log('raw message: ', Buffer.from(raw_message).toString('hex'))

		let message = transaction.message
		let raw = message.serialize
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
