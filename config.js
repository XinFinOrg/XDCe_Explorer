var web3 = require('web3');
var net = require('net');

var config = function () {

  this.logFormat = "combined";
  //Commented lines are for IPC
  //this.ipcPath = process.env["HOME"] + "/ethereum/privatechain/node/geth.ipc";
  //this.provider = new web3.providers.IpcProvider(this.ipcPath, net);
  //This is for RPC
  this.rpcPath = "http://64.79.72.58:8545";
  this.provider = new web3.providers.HttpProvider(this.rpcPath);

  this.bootstrapUrl = "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/yeti/bootstrap.min.css";

  this.erc20ABI = [{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"totalSupply","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}];

  this.tokenShortName = "XDCE";
  this.tokenAddress = "0x41ab1b6fcbb2fa9dced81acbdec13ea6315f2bf2";
  this.tokenDecimals = 18;
  this.tokenName = "XinFin XDCE";
  this.tokenTotalSupply = 100000000000000000000000000000;

  this.exportStartBlock = 0; // Start block for the historic export (set to 0 for a full export)

  this.names = {
  }
}

module.exports = config;
