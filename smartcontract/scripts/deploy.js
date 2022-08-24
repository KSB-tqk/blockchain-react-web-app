const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unmarketsentimentTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const MarketSentiment = await hre.ethers.getContractFactory(
    "MarketSentiment"
  );
  const marketsentiment = await MarketSentiment.deploy();

  await marketsentiment.deployed();

  console.log(
    `MarketSentiment with 1 ETH and unmarketsentiment timestamp ${unmarketsentimentTime} deployed to ${marketsentiment.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
