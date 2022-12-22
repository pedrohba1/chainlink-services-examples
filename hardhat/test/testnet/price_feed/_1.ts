import { expect } from "chai";
import { ethers } from "hardhat";
import { PriceConsumerV3 } from "../../../types/contracts/PriceConsumer.sol";




const NODE_ADDRESS = String(process.env.NODE_ADDRESS);
const LINK_TOKEN_ADDRESS = "0x01BE23585060835E02B77ef475b0Cc51aA1e0709";

describe("price feed consumer in mumbai testnet", function () {
  let priceConsumer: PriceConsumerV3;

  it("balance should meet criteria", async () => {
    const [owner] = await ethers.getSigners();
    console.log("owner address", owner.address);
    const balance = await owner.getBalance();
    console.log("current balance", balance.toString());
    expect(balance.gt("0")).to.be.equal(true);
  });

  it("should deploy price feed", async () => {
    const [owner] = await ethers.getSigners();

    const PriceConsumer = await ethers.getContractFactory("PriceConsumerV3");
    priceConsumer = await PriceConsumer.deploy(); 
  });

  it("should fetch pair value BTC/USD from aggregator", async () => {
    const [owner] = await ethers.getSigners();

    const price = await priceConsumer.getLatestPrice();
    console.log(ethers.utils.formatEther(price));

  });


});
