const deploy = async () => {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with the account: ", deployer.address);

    // getContractFactory: Toma la informacion del cache de compilacion y nos trae la informacion 
    // que necesita para mostrar los metodos, posteriormente desplegado el contrato
    const PlatziPunks = await ethers.getContractFactory("PlatziPunks"); // Exacto el mismo nombre del contato inteligente
    const deployed = await PlatziPunks.deploy();

    console.log("PlatziPunks is deployed at: ", deployed.address);
};

deploy().then(() => process.exit(0)).catch(error => {
    console.log(error);
    process.exit(1);
});