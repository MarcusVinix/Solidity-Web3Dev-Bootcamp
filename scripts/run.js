const main = async () => {

	const [owner, randomPerson] = await hre.ethers.getSigners();
	const waveContractFactory = 
		await hre.ethers.getContractFactory("WavePortal");
	const waveContract = await waveContractFactory.deploy();
	await waveContract.deployed();

	console.log("Contract deployed to: ", waveContract.address);
	console.log("Contract deployed by: ", owner.address);

	const map = new Map();

	let waveCount;
	waveCount = await waveContract.getTotalWaves();

	let waveTxn = await waveContract.wave();
	await waveTxn.wait();
	let i = map.get(owner.address);
	map.set(owner.address, ((i == undefined) ? 1 : ++i));

	waveCount = await waveContract.getTotalWaves();

	waveTxn = await waveContract.connect(randomPerson).wave();
	await waveTxn.wait();
	i = map.get(randomPerson.address);
	map.set(randomPerson.address, ((i == undefined) ? 1 : ++i));

	waveCount = await waveContract.getTotalWaves();

	console.log("Record de high five:")
	map.forEach((value, key) => {
		console.log("Address: ", key)
		console.log("WavesCount: ", value)
	})
};

const runMain = async () => {
	try {
		await main();
		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

runMain();