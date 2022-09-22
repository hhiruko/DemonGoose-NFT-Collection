const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  // URL from where we can extract the metadata for a Crypto Dev NFT
  const metadataURL = METADATA_URL;
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so cryptoDevsContract here is a factory for instances of our CryptoDevs contract.
  */
  const demonGooseContract = await ethers.getContractFactory("DemonGoose");

  // deploy the contract
  const deployedDemonGooseContract = await demonGooseContract.deploy(
    metadataURL
  );

  // print the address of the deployed contract
  console.log(
    "Demon Goose Contract Address:",
    deployedDemonGooseContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });