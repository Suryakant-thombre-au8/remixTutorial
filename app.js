

//this button will prompt us to connect our Metamask wallet to our Web App 

document.getElementById ("enableEthereumButton").addEventListener('click', () => {
    //Will Start the metamask extension
    ethereum.request({ method: 'eth_requestAccounts' });
  });
  
  // this will connect our WebApp to Infura allowing us to make function calls, the rpcURL is from our Infura account
   const rpcURL = 'https://rinkeby.infura.io/v3/eefe505901844f4cba2968390a4d8d8f';
   const web3 = new Web3(rpcURL);
   let account;
  
   // here is our contract Address, which we grabbed from Remix
  let contractAddress = '0x066D59555a418Ef85CaC11368fFaD9Caa0edcEda';
  
  
  // here is our function to make our smart contract call! window.ethereum.selectedAddress is our connected metamask account,
  // contract address is the one we deployed
  // value is 0 because we are not putting any arguments to this function call
  // gasPrice is 0 because a read function in solidity does not cost gas
  // gas has to have a minumum of 21064, when making read only function calls, but no gas is actually consumed
  // data is our function hash from our complication details in Remix
  // notice that our paramaters must be in Hexadecimal
  // finnaly, our result is changed into a number with the web3 utility method, otherwise our result would be a hexadecimal
  
  const handleClick = async () => {
      let account = window.ethereum.selectedAddress
          window.ethereum
            .request({
              method: 'eth_call',
              params: [
                {
                  from: account,
                  to: contractAddress,
                  value: '0x0',
                  gasPrice: '0x0',
                  gas: '0x30000',
                  data: '0x2e64cec1'
                },
              ],
            })
            .then((result) => {
              console.log (web3.utils.hexToNumber(result))
              }).catch((error) => {
                console.log(error)
              })}
              
  
  document.getElementById ("retrieveButton").addEventListener ("click", handleClick, false);
  