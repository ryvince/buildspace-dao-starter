import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

//Bundledrop module is the ERC-1155 contract
const bundleDrop = sdk.getBundleDropModule(
  "0xd61752C932beBaf0A4067C64DeF97C63564888E8",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "$Shelter",
        description: "This NFT will give you access to the HomelessDAO!",
        image: readFileSync("scripts/assets/drawn_house_heart.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()