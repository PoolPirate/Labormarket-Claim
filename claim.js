import { ethers, AbiCoder } from "ethers";

const privateKey =
  "";
const laborMarket = 
  "0x3eeac7cf0526e4c26f9cd400fbea852715381709";
const challengeId =
  87;
const claimCount =
  10;

if (privateKey.length == 0) {
  console.log("Specify privateKey!");
  process.exit(0);
}

const provider = new ethers.JsonRpcProvider("https://polygon-rpc.com", {
  name: "Polygon",
  chainId: 137,
});
const wallet = new ethers.Wallet(privateKey, provider);

const abiCoder = new AbiCoder();

var tx = await wallet.sendTransaction({
  to: laborMarket,
  data: "0xdaa0aae9" + abiCoder.encode(["uint256", "uint256"], [challengeId, claimCount]).substring(2),
  gasPrice: 202184014301,
});

await tx.wait();

await new Promise((resolve) => {});
