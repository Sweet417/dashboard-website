"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.__esModule = true;
exports.IWETH__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "deposit",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        name: "withdraw",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
];
var IWETH__factory = /** @class */ (function () {
    function IWETH__factory() {
    }
    IWETH__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IWETH__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IWETH__factory.abi = _abi;
    return IWETH__factory;
}());
exports.IWETH__factory = IWETH__factory;