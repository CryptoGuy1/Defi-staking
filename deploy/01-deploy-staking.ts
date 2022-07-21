import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { ethers } from 'hardhat'

const deployRewardToken:DeployFunction = async (
  hre:HardhatRuntimeEnvironment
  ) => {
    const { getNamedAccounts, deployments, network } = hre
    const { deploy, log, get } = deployments
    const { deployer } = await getNamedAccounts()
    const rewardToken = await ethers.getContract('RewardToken')

    const staking = await deploy('Staking', {
      from: deployer,
      args: [rewardToken.address, rewardToken.address],
      log: true
    })
  }

export default deployRewardToken