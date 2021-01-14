require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet remember random unique hope knee bridge tenant'; 
let testAccounts = [
"0x7e0d97c61c3b3753b71f8adda73bef35561603b0e5f211e3f49b69c29f3f0400",
"0xf0811dca004a3b2f36d56c8507c7fb2e6c6f54c9a253d3b2a9a19a6c79f8b74a",
"0x137ba642eac5feeadd46b58b93bbbc4e552a23b1da16d5d496a30317d3ae7c1f",
"0x72d42407af9cf0c93c7a0ba4b23f80de0b7597e80ec2f55879c813da5cd35155",
"0x8a0183009b15d9f92500279142ef4d49d0b07762a9b80e88c454c37de4d0be1f",
"0xb01fc1582e7155e8c182932f5e9ce9a754e9cb035372408315c5e039609cf4e5",
"0x7ef59305f76f79dc59b94eb8268d265b9f97b81d12b23fdb4996df3e0aaecd05",
"0x5cee3f06ebde2692482716dc4db4c6e9864b37ea1aedd868b859abf5b4ce5280",
"0xcbd70446a6c12fcd46d4673ac58ea8a1a622db8865a104b03b8ac8e88167d2ce",
"0xb0635f8a441a6793352c05ed2ca7d23ffef3ff2ef0de2b0f5795e68e0b1078b9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
