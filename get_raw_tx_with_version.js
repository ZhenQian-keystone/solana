const web3 = require('@solana/web3.js')
// refrenct doc

// https://solana.com/docs/core/transactions#%E4%BA%A4%E6%98%93

// https://solscan.io/tx/5zgvxQjV6BisU8SfahqasBZGfXy5HJ3YxYseMBG7VbR4iypDdtdymvE1jmEMG7G39bdVBaHhLYUHUejSTtuZEpEj

const connection = new web3.Connection(web3.clusterApiUrl('mainnet-beta'))

// tx hash
let tx_hash =
	'5zgvxQjV6BisU8SfahqasBZGfXy5HJ3YxYseMBG7VbR4iypDdtdymvE1jmEMG7G39bdVBaHhLYUHUejSTtuZEpEj'

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
		console.log('message ===>  ', message)
		// for each message
		let message_header = message.header

		console.log('message_header: ', message_header)

		// account addresses == account kehys
		let account_addresses = message.accountKeys
		console.log('message addresses ', account_addresses)

		// recent hash
		let recent_block_hash = message.recentBlockhash
		console.log('recent block hash ', recent_block_hash)

		// instructions
		let message_instructions = message.instructions

		console.log('instructions ', message_instructions)
	})

// result
// signatures:  [
//     '5zgvxQjV6BisU8SfahqasBZGfXy5HJ3YxYseMBG7VbR4iypDdtdymvE1jmEMG7G39bdVBaHhLYUHUejSTtuZEpEj'
//   ]
//   message_header:  {
//     numReadonlySignedAccounts: 0,
//     numReadonlyUnsignedAccounts: 9,
//     numRequiredSignatures: 1
//   }
//   message addresses  [
//     PublicKey [PublicKey(aRsimwXz2pU8Sr1VQzEjykiEU4wmRhtxe3xB2B7k2j6)] {
//       _bn: <BN: 8904ad8e08db0a43a396c4d58b75befb2d0bb52a884fe2356f7a5d4f79c1845>
//     },
//     PublicKey [PublicKey(7h51TX1pNvSaNyjg4koKroJqoe7atKB7xWUfir7ZqX81)] {
//       _bn: <BN: 6369e2b9dd2eed26b91e56b642d118df0ff7d4a0f3c6c2e722face2365fd87ce>
//     },
//     PublicKey [PublicKey(AC9MKesxCNsBhwzNikJbphM98zeCQAVqg58ibF3JYjCh)] {
//       _bn: <BN: 889403562623feb51a656493fb3964e89c2ed1be748c2692c410cdb7e6912236>
//     },
//     PublicKey [PublicKey(75HgnSvXbWKZBpZHveX68ZzAhDqMzNDS29X6BGLtxMo1)] {
//       _bn: <BN: 5a3f4fc6e059cbef43a31884da9144fb99ea03b253c5bf15e8b703cd0d6cb4a4>
//     },
//     PublicKey [PublicKey(ANP74VNsHwSrq9uUSjiSNyNWvf6ZPrKTmE4gHoNd13Lg)] {
//       _bn: <BN: 8b335f799935aa3f8ccd9384f456fe6222a26f7d31b04143246b927066cbab9d>
//     },
//     PublicKey [PublicKey(7Zg1i2faS1NVUGND1Eb6ofr3XxVGMkmvX2FLts7H5nQs)] {
//       _bn: <BN: 6184d194fcd38b5fd4826bcfce778ada40a4ee6e864f74daf824cfaf0354431c>
//     },
//     PublicKey [PublicKey(APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9)] {
//       _bn: <BN: 8b69cf47f17b6ab36eb9dcac947bbaf6666e8c2b597b8a25861babfd6216ce2a>
//     },
//     PublicKey [PublicKey(8JnSiuvQq3BVuCU3n4DrSTw9chBSPvEMswrhtifVkr1o)] {
//       _bn: <BN: 6c9010bb7b7cc2bfc144a74aa59f3b28a1368c87c352012c8d37eb4045d20e0a>
//     },
//     PublicKey [PublicKey(58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2)] {
//       _bn: <BN: 3d6e472e67a46ea6b4bd0bab9dfd35e2b4c72f1d6d59c2eab95c942573ad22f1>
//     },
//     PublicKey [PublicKey(HRk9CMrpq7Jn9sh7mzxE8CChHG8dneX9p475QKz4Fsfc)] {
//       _bn: <BN: f411b5d45e8c66bb2cf71b6f45f5ac00ca5737f1a76205c77b0afef885eae5c7>
//     },
//     PublicKey [PublicKey(DQyrAcCrDXQ7NeoqGgDCZwBvWDcYmFCjSb9JtteuvPpz)] {
//       _bn: <BN: b870e12dd379891561d2e9fa8f26431834eb736f2f24fc2a2a4dff1fd5dca4df>
//     },
//     PublicKey [PublicKey(HLmqeL62xR1QoZ1HKKbXRrdN1p3phKpxRMb2VVopvBBz)] {
//       _bn: <BN: f2cbb9b760eddb185706303063ad33d7b57296ea02d4e0335e31ceafa4cc42dd>
//     },
//     PublicKey [PublicKey(9wFFyRfZBsuAha4YcuxcXLKwMxJR43S7fPfQLusDBzvT)] {
//       _bn: <BN: 84c2fb18aed619f546632653ef06029f02a864bf3829867181bb20df1d715c30>
//     },
//     PublicKey [PublicKey(14ivtgssEBoBjuZJtSAPKYgpUK7DmnSwuPMqJoVTSgKJ)] {
//       _bn: <BN: f426e16eb8cf03119175f980514344955ce370e765940f3c29439545fb45a9>
//     },
//     PublicKey [PublicKey(CEQdAFKdycHugujQg9k2wbmxjcpdYZyVLfV9WerTnafJ)] {
//       _bn: <BN: a6dfd15c507705f9339b953c1a4dfdbc9cc186dd2f62df48a958045e2a765259>
//     },
//     PublicKey [PublicKey(5KKsLVU6TcbVDK4BS6K1DGDxnh4Q9xjYJ8XaDCG5t8ht)] {
//       _bn: <BN: 4020894653cfddfa7b7e60c966682736a2db0f838564925b11077a21e036d797>
//     },
//     PublicKey [PublicKey(36c6YqAwyGKQG66XEp2dJc5JqjaBNv7sVghEtJv4c7u6)] {
//       _bn: <BN: 1f26f5f0461c4010bd5cc8ca7066dda584a6ee717934c677adf4c25fbd156a2d>
//     },
//     PublicKey [PublicKey(8CFo8bL8mZQK8abbFyypFMwEDd8tVJjHTTojMLgQTUSZ)] {
//       _bn: <BN: 6ae3ed327a0f8849a772941d97050f3a6e8cb8dd3abcdb1470887c82b54d3f36>
//     },
//     PublicKey [PublicKey(9W959DqEETiGZocYWCQPaJ6sBmUzgfxXfqGeTEdp3aQP)] {
//       _bn: <BN: 7e54771a57a6f14ca9e402d54aee45f7378aca365c7b169a7ec83f5182b298f0>
//     },
//     PublicKey [PublicKey(TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA)] {
//       _bn: <BN: 6ddf6e1d765a193d9cbe146ceeb79ac1cb485ed5f5b37913a8cf5857eff00a9>
//     },
//     PublicKey [PublicKey(EGZ7tiLeH62TPV1gL8WwbXGzEPa9zmcpVnnkPKKnrE2U)] {
//       _bn: <BN: c523f583f96ed4fdbd8ade165f8dfe5533c10fa021a22a3f31e54adc02031661>
//     },
//     PublicKey [PublicKey(JU8kmKzDHF9sXWsnoznaFDFezLsE5uomX2JkRMbmsQP)] {
//       _bn: <BN: 4798dce15306e485502448ae418831ba6a76b92956377a6eb7e058e5e011e54>
//     },
//     PublicKey [PublicKey(675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8)] {
//       _bn: <BN: 4bd949c43602c33f207790ed16a3524ca1b9975cf121a2a90cffec7df8b68acd>
//     },
//     PublicKey [PublicKey(5Q544fKrFoe6tsEbD7S8EmxGTJYAKtTVhAW5Q5pge4j1)] {
//       _bn: <BN: 4157b0580f31c5fce44a62582dbcf9d78ee75943a084a393b350368d22899308>
//     },
//     PublicKey [PublicKey(9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin)] {
//       _bn: <BN: 850f2d6e02a47af824d09ab69dc42d70cb28cbfa249fb7ee57b9d256c12762ef>
//     },
//     PublicKey [PublicKey(F8Vyqk3unwxkXukZFQeYyGmFfTG3CAX4v24iyrjEYBJV)] {
//       _bn: <BN: d1ef734f68204eb2e2c04629794a8c02107ad09bf3b219597a14effb8a04d986>
//     },
//     PublicKey [PublicKey(JUP2jxvXaqu7NQY1GmNF4m1vodw12LVXYxbFL2uJvfo)] {
//       _bn: <BN: 479d50ca68497da9571369968ee1347fda9c3ba32e438dad6225250695de886>
//     }
//   ]
//   recent block hash  DDeetiKt5VwFMUEqLp1Y65fbGTDqc42iAJZPttDPM4g
//   instructions  [
//     {
//       accounts: [ 1, 5 ],
//       data: 'fC8nMvWeAaD',
//       programIdIndex: 26,
//       stackHeight: null
//     },
//     {
//       accounts: [
//         18, 19, 20, 21, 0,
//          2,  3,  4,  5, 6,
//          7
//       ],
//       data: '6kT8niHk82HZ8EW7A8pgsqGR53HcqNhcKcyd',
//       programIdIndex: 26,
//       stackHeight: null
//     },
//     {
//       accounts: [
//         22, 19,  8, 23,  9, 10, 11,
//         24, 12, 13, 14, 15, 16, 17,
//         25,  5,  2,  0,  1
//       ],
//       data: '3u8Qvku9ABNoUN6BtbeceYjSf',
//       programIdIndex: 26,
//       stackHeight: null
//     }
//   ]
