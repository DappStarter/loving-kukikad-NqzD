require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index remember stick honey hidden arctic army gentle'; 
let testAccounts = [
"0xe9a821ffa542435c30953b51a53678ae8206d1d5da4b2489af557627e5de340f",
"0x097e382b5debe15f2bd7a799563328e22563e6d935e5e0f162f153936a142596",
"0x55054c6787936e9f4f8288461336abcff35a9736e8da94b8336ac730864f6687",
"0xdfb5310d09b8913545621d7d0216c9e85cf77afea5e16f2f5b9fbc35cd2c0bd2",
"0xc21371da5b0cc012eb30e1b06b75919d1338b3177d295502cfccb77cefc5b81c",
"0xfbf2001546c58c1c723db8229ad1e013b4bdf51d0a338ca5b4719a1b4e3640bf",
"0x1ff81f368ebe907b6bf46372fe57761d3bb9dac82647668aa9f1244c96584e2e",
"0xec78f380dd46d8ecf8912600176012d63bc2265eb240f5af17851cb3f50b2cd4",
"0xd5812f8bd8a5c3f0ea6300e4b08121098da3623cb914ac26009695cce5c044c2",
"0xa2ff9093d94766964ea168070655d409756ab89de94057c450805f24e2f5a604"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


