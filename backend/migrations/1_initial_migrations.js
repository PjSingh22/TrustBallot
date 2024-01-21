// const Migrations = artifacts.require("Migrations");
const GeneralContract = artifacts.require("GeneralContract");
const PrimaryContract = artifacts.require("PrimaryContract");

module.exports = function (deployer) {
  // deployer.deploy(Migrations);
  deployer.deploy(GeneralContract);
  deployer.deploy(PrimaryContract);
};
