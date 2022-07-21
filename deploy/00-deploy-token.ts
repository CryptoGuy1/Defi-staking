import { HardhatRuntimeEnvironment } from 'hardhat/types'
import { DeployFunction } from 'hardhat-deploy/types'
import { ethers } from 'hardhat'

const deployRewardToken:DeployFunction = async (
  hre:HardhatRuntimeEnvironment
  ) => {
    const { getNamedAccounts, deployments, network } = hre
    const { deploy, log, get } = deployments
    const { deployer } = await getNamedAccounts()

    const rewardToken = await deploy('RewardToken', {
      from: deployer,
      args: [],
      log: true
    })
  }

export default deployRewardToken