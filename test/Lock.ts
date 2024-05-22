const { expect } = require("chai");
const { ethers } = require("hardhat")

// // describe("********** Test the Checker contract **********", async () => {
// //   let checker: any;
// //   let tokencontract: any;
// //   let signers: any;
// //   let useraddess: any;
// //   beforeEach(async () => {
// //     signers = await ethers.getSigners();

// //     const Token = await ethers.getContractFactory("Tokencontract");
// //     tokencontract = await Token.deploy();
// //     const Checker = await ethers.getContractFactory("CHECKER");
// //     checker = await Checker.deploy(tokencontract.target);
// //   })
// //   async function checkbalance(useraddess) {
// //     const balanceofcheckercontract = await tokencontract.balanceOf(useraddess);
// //     console.log("Balance of the ", useraddess, " ===> ", balanceofcheckercontract);
// //   }
// //   async function approve() {
// //     await tokencontract.approve(checker.target, ethers.parseEther("10000000"));
// //     console.log("Approve Done!!")
// //   }
// //   it("********* Imp address *********", async () => {
// //     console.log("Token deploy address ====> ", tokencontract.target)
// //     console.log("Check deploy contract ====> ", checker.target);
// //     for (let index = 0; index < 5; index++) {
// //       console.log("Signer[", index, "] address ====> ", signers[index].address)
// //     }
// //   })
// //   it("********* TO CHECK THE registerUser FUNTION INSIDE THE CHECKER CONTRACT *********", async () => {
// //     await tokencontract.approve(checker.target, ethers.parseEther("10000000"));
// //     await checkbalance(checker.target);
// //     await checker.registerUser("0x87daB07Ec49e2eBdC126747FfA39488411b0d620");
// //     await checkbalance(checker.target);
// //   })
// //   it("********* TO CHECK THE registerUser FUNTION INSIDE THE CHECKER CONTRACT TO ADD MORE THAN ONE USER *********", async () => {
// //     await approve();
// //     await checkbalance(checker.target);
// //     await checker.registerUser("0x87daB07Ec49e2eBdC126747FfA39488411b0d620");
// //     await checkbalance(checker.target);

// //     await approve();
// //     await tokencontract.connect(signers[0]).mint(signers[2].address, ethers.parseEther("100000"));
// //     await checkbalance(signers[2].address);
// //     await tokencontract.connect(signers[2]).approve(checker.target, ethers.parseEther("100000"));
// //     await checker.connect(signers[2]).registerUser("0x87daB07Ec49e2eBdC126747FfA39488411b0d620");
// //     await checkbalance(checker.target);
// //   })
// // })

// // describe("************* FundDepost Contract *************", async () => {
// //   let fundcontract: any;
// //   let signers: any;
// //   let useraddess: any;
// //   beforeEach(async () => {
// //     signers = await ethers.getSigners();
// //     const FundContract = await ethers.getContractFactory("FundDeposit");
// //     fundcontract = await FundContract.deploy(signers[1].address);
// //   })
// //   async function checkbalance(useraddess) {
// //     const balanceoftheuser: any = await ethers.provider.getBalance(useraddess);
// //     console.log("The balance of the ", useraddess, " is ===> ", balanceoftheuser)
// //   }
// //   it("************* Imp address *************", async () => {
// //     console.log("Fund contract deploy on address ======> ", fundcontract.target);
// //     for (let index = 0; index < 4; index++) {
// //       console.log("signers [", index, "] ===> ", signers[index].address)
// //     }
// //   })

// //   it("************* FundDeposit Function *************", async () => {
// //     await checkbalance(signers[2].address)
// //     await fundcontract.connect(signers[2]).DepostFunds({ value: ethers.parseEther("10") })
// //     await checkbalance(signers[2].address)
// //     await checkbalance(signers[1].address)
// //   })
// //   it("************* FundDeposit with change address *************", async () => {
// //     // await checkbalance(signers[2].address)
// //     // await fundcontract.connect(signers[2]).DepostFunds({ value: ethers.parseEther("10") })
// //     // await checkbalance(signers[2].address)
// //     // await checkbalance(signers[1].address)
// //     await fundcontract.connect(signers[0]).changeAddress(signers[3]);
// //     await checkbalance(signers[0].address)
// //     await checkbalance(signers[3].address)
// //     const tx: any = await fundcontract.connect(signers[2]).DepostFunds({ value: ethers.parseEther("100") })
// //     console.log("The transaction hash of this Transaction is ===> ", tx.hash);
// //     await checkbalance(signers[2].address)
// //     await checkbalance(signers[3].address)
// //   })
// // })



// // describe("Testing the Fundtransfer contract", async () => {
// //   let signers: any;
// //   let tokentransfercontract: any;
// //   let tokencontract: any;
// //   let useraddress: any;

// //   beforeEach(async () => {
// //     //signers addresses
// //     signers = await ethers.getSigners();

// //     // Token contract
// //     const TokenContract = await ethers.getContractFactory("Tokencontract");
// //     tokencontract = await TokenContract.deploy();

// //     // Tokenwithdrw contract
// //     const TokenTransfer = await ethers.getContractFactory("TokenTransfer");
// //     tokentransfercontract = await TokenTransfer.deploy(tokencontract.target, signers[2].address)
// //   })

// //   async function checkbalance(useraddress) {
// //     const balanceOfaddress = await tokencontract.balanceOf(useraddress);
// //     console.log("The balance of the ", useraddress, " =====> ", balanceOfaddress)
// //   }
// //   // imp address
// //   it("********* To check the all the imp address *********", async () => {
// //     console.log("Token Contract address =====> ", tokencontract.target)
// //     console.log("Token Transfer contract address =====> ", tokentransfercontract.target)
// //     for (let index = 0; index < 5; index++) {
// //       console.log("Signers [", index, "] ===> ", signers[index].address);
// //     }
// //   })

// //   // to check the transfer Functions 
// //   it("********* To check the Transfer Token Function *********", async () => {
// //     await checkbalance(signers[0].address);
// //     await tokencontract.transfer(signers[1].address, ethers.parseEther("100"));
// //     await checkbalance(signers[1].address)
// //     await tokencontract.connect(signers[1]).approve(tokentransfercontract.target, ethers.parseEther("1000000"))
// //     await tokentransfercontract.connect(signers[1]).transfertoken();
// //     await checkbalance(signers[1].address)
// //     await checkbalance(signers[2].address)

// //     console.log("**********************************************************************************************************")
// //     for (let index = 0; index < 5; index++) {
// //       await checkbalance(signers[index].address);
// //     }
// //   })
// // })


describe("************ Check the AutoForwarder Contract ************", async () => {
  let contract: any;
  let signers: any;
  let useraddress: any;
  beforeEach(async () => {
    signers = await ethers.getSigners();

    const AutoForwarder = await ethers.getContractFactory("AutoForwarder");
    contract = await AutoForwarder.connect(signers[0]).deploy(signers[2].address);
  })

  async function getBalance(useraddess) {
    const balance = await ethers.provider.getBalance(useraddess);
    console.log("Balance of ", useraddess, " ======> ", balance)
  }
  it("************* Some Important address *************", async () => {
    console.log("Contract Address ===> ", contract.target);
    console.log(' ************* ************* ************* ************* ************* *************')
    for (let index = 0; index < 5; index++) {
      console.log("Singers [", index, "] =====> ", signers[index].address);
    }
    console.log(' ************* ************* ************* ************* ************* *************')

    for (let index = 0; index < 5; index++) {
      const balancees = await getBalance(signers[index].address);
      console.log(index, "", balancees)
    }
    console.log(' ************* ************* ************* ************* ************* *************')
  })
  it("********* BuyToken function ********", async () => {
    console.log(' ************* ************* ************* ************* ************* *************')
    await getBalance(signers[1].address);
    await getBalance(signers[2].address);
    await contract.connect(signers[1]).BuyToken({ value: ethers.parseEther("1") });
    await getBalance(signers[1].address);
    await getBalance(signers[2].address);
    console.log(' ************* ************* ************* ************* ************* *************')
  })
  it("********* check by changing target address BuyToken function ********", async () => {
    // console.log(' ************* ************* ************* ************* ************* *************')
    // await getBalance(signers[1].address);
    // await getBalance(signers[2].address);
    // await contract.connect(signers[1]).BuyToken({ value: ethers.parseEther("0.001") });
    // await getBalance(signers[1].address);
    // await getBalance(signers[2].address);
    // console.log(' ************* ************* ************* ************* ************* *************')
    await contract.connect(signers[0]).changeRecipentddr(signers[3].address);
    console.log("************ Change the user address ************")
    console.log(' ************* ************* ************* ************* ************* *************')
    await getBalance(signers[1].address);
    await getBalance(signers[2].address);
    await contract.connect(signers[1]).BuyToken({ value: ethers.parseEther("0.001") });
    await getBalance(signers[1].address);
    await getBalance(signers[2].address);
    await getBalance(signers[3].address);
    console.log(' ************* ************* ************* ************* ************* *************')
  })
})