import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
  "0xd61752C932beBaf0A4067C64DeF97C63564888E8",
);

(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory();
    // Specify conditions.
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 40_000,
      maxQuantityPerTransaction: 1,
    });
    
    //this will actually interact with our deployed contract on-chain and adjust the conditions,
    //Why do we pass in a 0? Well, basically our membership NFT has a tokenId of 0 since it's the first token in our ERC-1155 contract. 
    //Remember — w/ ERC-1155 we can have multiple people mint the same NFT. In this case, everyone mints an NFT w/ id 0. 
    await bundleDrop.setClaimCondition(0, claimConditionFactory);
    console.log("✅ Sucessfully set claim condition!");
  } catch (error) {
    console.error("Failed to set claim condition", error);
  }
})()