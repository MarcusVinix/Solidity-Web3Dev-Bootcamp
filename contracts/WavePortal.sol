// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
	uint256	totalWaves;
	constructor() {
		console.log("Uhu, I am a super smart contract, hahah");
	}

	function wave() public {
		totalWaves += 1;
		console.log("%s gave bye!", msg.sender);
	}

	function getTotalWaves() public view returns (uint256) {
		console.log("We have a total of %d bye!", totalWaves);
		return totalWaves;
	}
}