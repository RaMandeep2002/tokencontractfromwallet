import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const TokenTransfer = buildModule("FundDeposit", (m) => {

  const tokencontract = m.contract("Tokencontract");
  console.log("FundDeposit ==> ", tokencontract)
  const registercontract = m.contract("Checker", [tokencontract]);
  console.log("registercontract ==> ", registercontract)
  return { registercontract };
});

export default TokenTransfer;
