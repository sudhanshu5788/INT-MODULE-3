const { ethers } = require('hardhat');

async function main() {
  const Sudhanshu = await ethers.getContractFactory('Sudhanshu');
  const sudhanshu = await Sudhanshu.deploy('Sudhanshu', 'SUD', ethers.utils.parseEther('10000'));

  await sudhanshu.deployed();

  console.log('Sudhanshu deployed to:', sudhanshu.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
