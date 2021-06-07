import { ethers } from "hardhat";

  async function main() {
    const factory = await ethers.getContractFactory("TarotPriceOracle");
    const contract = await factory.deploy();

    console.log(`Contract address: ${contract.address}`);
    console.log(`Contract deploy tx hash: ${contract.deployTransaction.hash}`);

    await contract.deployed();

    console.log('Finished');
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  
