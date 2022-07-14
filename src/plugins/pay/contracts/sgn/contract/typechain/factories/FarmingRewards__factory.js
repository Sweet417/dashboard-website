"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.FarmingRewards__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "contract ISigsVerifier",
                name: "_sigsVerifier",
                type: "address"
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "recipient",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "token",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "reward",
                type: "uint256"
            },
        ],
        name: "FarmingRewardClaimed",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "contributor",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "token",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "contribution",
                type: "uint256"
            },
        ],
        name: "FarmingRewardContributed",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            },
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address"
            },
        ],
        name: "Paused",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address"
            },
        ],
        name: "PauserAdded",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address"
            },
        ],
        name: "PauserRemoved",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "address",
                name: "account",
                type: "address"
            },
        ],
        name: "Unpaused",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
        ],
        name: "addPauser",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "_rewardsRequest",
                type: "bytes"
            },
            {
                internalType: "bytes[]",
                name: "_sigs",
                type: "bytes[]"
            },
            {
                internalType: "address[]",
                name: "_signers",
                type: "address[]"
            },
            {
                internalType: "uint256[]",
                name: "_powers",
                type: "uint256[]"
            },
        ],
        name: "claimRewards",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        name: "claimedRewardAmounts",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_token",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            },
        ],
        name: "contributeToRewardPool",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_token",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256"
            },
        ],
        name: "drainToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
        ],
        name: "isPauser",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "pause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "paused",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        name: "pausers",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
        ],
        name: "removePauser",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "renouncePauser",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "sigsVerifier",
        outputs: [
            {
                internalType: "contract ISigsVerifier",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address"
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "unpause",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
];
var _bytecode = "0x60a06040523480156200001157600080fd5b5060405162001d7c38038062001d7c833981016040819052620000349162000182565b6200003f3362000069565b6000805460ff60a01b191690556200005733620000b9565b6001600160a01b0316608052620001b4565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03811660009081526001602052604090205460ff1615620001275760405162461bcd60e51b815260206004820152601960248201527f4163636f756e7420697320616c72656164792070617573657200000000000000604482015260640160405180910390fd5b6001600160a01b038116600081815260016020818152604092839020805460ff191690921790915590519182527f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f8910160405180910390a150565b6000602082840312156200019557600080fd5b81516001600160a01b0381168114620001ad57600080fd5b9392505050565b608051611ba5620001d76000396000818161025f01526104250152611ba56000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806380f51c12116100975780638da5cb5b116100665780638da5cb5b146102225780639d4323be14610247578063ccf2683b1461025a578063f2fde38b1461028157600080fd5b806380f51c12146101d1578063825168ff146101f457806382dc1ec4146102075780638456cb591461021a57600080fd5b80636b2c0f55116100d35780636b2c0f551461019b5780636b5d21e9146101ae5780636ef8d66d146101c1578063715018a6146101c957600080fd5b80631744092e146101055780633f4ba83a1461014357806346fbf68e1461014d5780635c975abb14610189575b600080fd5b610130610113366004611677565b600260209081526000928352604080842090915290825290205481565b6040519081526020015b60405180910390f35b61014b610294565b005b61017961015b3660046116aa565b6001600160a01b031660009081526001602052604090205460ff1690565b604051901515815260200161013a565b600054600160a01b900460ff16610179565b61014b6101a93660046116aa565b610302565b61014b6101bc366004611711565b610368565b61014b610697565b61014b6106a0565b6101796101df3660046116aa565b60016020526000908152604090205460ff1681565b61014b610202366004611800565b610704565b61014b6102153660046116aa565b6107b9565b61014b61081c565b6000546001600160a01b03165b6040516001600160a01b03909116815260200161013a565b61014b610255366004611800565b610883565b61022f7f000000000000000000000000000000000000000000000000000000000000000081565b61014b61028f3660046116aa565b61094e565b3360009081526001602052604090205460ff166102f85760405162461bcd60e51b815260206004820152601460248201527f43616c6c6572206973206e6f742070617573657200000000000000000000000060448201526064015b60405180910390fd5b610300610a2d565b565b6000546001600160a01b0316331461035c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102ef565b61036581610ad3565b50565b600054600160a01b900460ff16156103b55760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016102ef565b6000463060405160200161040b92919091825260601b6bffffffffffffffffffffffff191660208201527f4661726d696e6752657761726473000000000000000000000000000000000000603482015260420190565b6040516020818303038152906040528051906020012090507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663682dbc22828b8b6040516020016104679392919061182a565b6040516020818303038152906040528989898989896040518863ffffffff1660e01b815260040161049e979695949392919061195b565b60006040518083038186803b1580156104b657600080fd5b505afa1580156104ca573d6000803e3d6000fd5b50505050600061050f8a8a8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610b9392505050565b90506000805b82602001515181101561063c5760008360200151828151811061053a5761053a611a3b565b6020026020010151905060008460400151838151811061055c5761055c611a3b565b60209081029190910181015186516001600160a01b03908116600090815260028452604080822092871682529190935282205490925061059c9083611a67565b905080156106265785516001600160a01b0390811660009081526002602090815260408083209387168084529390915290208390558651600196506105e2919083610e4f565b85516040518281526001600160a01b038086169216907f97e6c3172350795e26977663112f38653689372e771e85bad9fbadb1af0e98b29060200160405180910390a35b505050808061063490611a7e565b915050610515565b508061068a5760405162461bcd60e51b815260206004820152600d60248201527f4e6f206e6577207265776172640000000000000000000000000000000000000060448201526064016102ef565b5050505050505050505050565b61030033610ad3565b6000546001600160a01b031633146106fa5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102ef565b6103006000610ee4565b600054600160a01b900460ff16156107515760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016102ef565b336107676001600160a01b038416823085610f4c565b826001600160a01b0316816001600160a01b03167f40aa1b9a9157bc37a09a78d5a46e53087b82ee0034ebe896d4d1a52f31b333d4846040516107ac91815260200190565b60405180910390a3505050565b6000546001600160a01b031633146108135760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102ef565b61036581610f8a565b3360009081526001602052604090205460ff1661087b5760405162461bcd60e51b815260206004820152601460248201527f43616c6c6572206973206e6f742070617573657200000000000000000000000060448201526064016102ef565b610300611048565b600054600160a01b900460ff166108dc5760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016102ef565b6000546001600160a01b031633146109365760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102ef565b61094a6001600160a01b0383163383610e4f565b5050565b6000546001600160a01b031633146109a85760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102ef565b6001600160a01b038116610a245760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084016102ef565b61036581610ee4565b600054600160a01b900460ff16610a865760405162461bcd60e51b815260206004820152601460248201527f5061757361626c653a206e6f742070617573656400000000000000000000000060448201526064016102ef565b6000805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6001600160a01b03811660009081526001602052604090205460ff16610b3b5760405162461bcd60e51b815260206004820152601560248201527f4163636f756e74206973206e6f7420706175736572000000000000000000000060448201526064016102ef565b6001600160a01b038116600081815260016020908152604091829020805460ff1916905590519182527fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e91015b60405180910390a150565b610bc0604051806060016040528060006001600160a01b0316815260200160608152602001606081525090565b60408051808201909152600080825260208201849052610be18260036110d0565b905080600281518110610bf657610bf6611a3b565b602002602001015167ffffffffffffffff811115610c1657610c16611a99565b604051908082528060200260200182016040528015610c3f578160200160208202803683370190505b508360200181905250600081600281518110610c5d57610c5d611a3b565b60200260200101818152505080600381518110610c7c57610c7c611a3b565b602002602001015167ffffffffffffffff811115610c9c57610c9c611a99565b604051908082528060200260200182016040528015610cc5578160200160208202803683370190505b508360400181905250600081600381518110610ce357610ce3611a3b565b6020026020010181815250506000805b60208401515184511015610e4657610d0a8461118a565b90925090508160011415610d3957610d29610d24856111c4565b611281565b6001600160a01b03168552610cf3565b8160021415610dce57610d4e610d24856111c4565b856020015184600281518110610d6657610d66611a3b565b602002602001015181518110610d7e57610d7e611a3b565b60200260200101906001600160a01b031690816001600160a01b03168152505082600281518110610db157610db1611a3b565b602002602001018051809190610dc690611a7e565b905250610cf3565b8160031415610e3757610de8610de3856111c4565b611292565b856040015184600381518110610e0057610e00611a3b565b602002602001015181518110610e1857610e18611a3b565b60200260200101818152505082600381518110610db157610db1611a3b565b610e4184826112c9565b610cf3565b50505050919050565b6040516001600160a01b038316602482015260448101829052610edf90849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261133b565b505050565b600080546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6040516001600160a01b0380851660248301528316604482015260648101829052610f849085906323b872dd60e01b90608401610e7b565b50505050565b6001600160a01b03811660009081526001602052604090205460ff1615610ff35760405162461bcd60e51b815260206004820152601960248201527f4163636f756e7420697320616c7265616479207061757365720000000000000060448201526064016102ef565b6001600160a01b038116600081815260016020818152604092839020805460ff191690921790915590519182527f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f89101610b88565b600054600160a01b900460ff16156110955760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016102ef565b6000805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610ab63390565b81516060906110e0836001611aaf565b67ffffffffffffffff8111156110f8576110f8611a99565b604051908082528060200260200182016040528015611121578160200160208202803683370190505b5091506000805b602086015151865110156111815761113f8661118a565b8092508193505050600184838151811061115b5761115b611a3b565b6020026020010181815161116f9190611aaf565b90525061117c86826112c9565b611128565b50509092525090565b600080600061119884611420565b90506111a5600882611ac7565b92508060071660058111156111bc576111bc611ae9565b915050915091565b606060006111d183611420565b905060008184600001516111e59190611aaf565b90508360200151518111156111f957600080fd5b8167ffffffffffffffff81111561121257611212611a99565b6040519080825280601f01601f19166020018201604052801561123c576020820181803683370190505b50602080860151865192955091818601919083010160005b8581101561127657818101518382015261126f602082611aaf565b9050611254565b505050935250919050565b600061128c826114a2565b92915050565b60006020825111156112a357600080fd5b60208201519050815160206112b89190611a67565b6112c3906008611aff565b1c919050565b60008160058111156112dd576112dd611ae9565b14156112ec57610edf82611420565b600281600581111561130057611300611ae9565b141561010057600061131183611420565b905080836000018181516113259190611aaf565b90525060208301515183511115610edf57600080fd5b6000611390826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166114ca9092919063ffffffff16565b805190915015610edf57808060200190518101906113ae9190611b1e565b610edf5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016102ef565b602080820151825181019091015160009182805b600a81101561149c5783811a915061144d816007611aff565b82607f16901b85179450816080166000141561148a5761146e816001611aaf565b8651879061147d908390611aaf565b9052509395945050505050565b8061149481611a7e565b915050611434565b50600080fd5b600081516014146114b257600080fd5b50602001516c01000000000000000000000000900490565b60606114d984846000856114e3565b90505b9392505050565b60608247101561155b5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016102ef565b843b6115a95760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102ef565b600080866001600160a01b031685876040516115c59190611b40565b60006040518083038185875af1925050503d8060008114611602576040519150601f19603f3d011682016040523d82523d6000602084013e611607565b606091505b5091509150611617828286611622565b979650505050505050565b606083156116315750816114dc565b8251156116415782518084602001fd5b8160405162461bcd60e51b81526004016102ef9190611b5c565b80356001600160a01b038116811461167257600080fd5b919050565b6000806040838503121561168a57600080fd5b6116938361165b565b91506116a16020840161165b565b90509250929050565b6000602082840312156116bc57600080fd5b6114dc8261165b565b60008083601f8401126116d757600080fd5b50813567ffffffffffffffff8111156116ef57600080fd5b6020830191508360208260051b850101111561170a57600080fd5b9250929050565b6000806000806000806000806080898b03121561172d57600080fd5b883567ffffffffffffffff8082111561174557600080fd5b818b0191508b601f83011261175957600080fd5b81358181111561176857600080fd5b8c602082850101111561177a57600080fd5b60209283019a509850908a0135908082111561179557600080fd5b6117a18c838d016116c5565b909850965060408b01359150808211156117ba57600080fd5b6117c68c838d016116c5565b909650945060608b01359150808211156117df57600080fd5b506117ec8b828c016116c5565b999c989b5096995094979396929594505050565b6000806040838503121561181357600080fd5b61181c8361165b565b946020939093013593505050565b838152818360208301376000910160200190815292915050565b60005b8381101561185f578181015183820152602001611847565b83811115610f845750506000910152565b60008151808452611888816020860160208601611844565b601f01601f19169290920160200192915050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b8183526000602080850194508260005b85811015611901576001600160a01b036118ee8361165b565b16875295820195908201906001016118d5565b509495945050505050565b81835260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83111561193e57600080fd5b8260051b8083602087013760009401602001938452509192915050565b60808152600061196e608083018a611870565b82810360208401528088825260208201905060208960051b8301018a60005b8b811015611a0157848303601f190184528135368e9003601e190181126119b357600080fd5b8d01803567ffffffffffffffff8111156119cc57600080fd5b8036038f13156119db57600080fd5b6119e985826020850161189c565b6020968701969095509390930192505060010161198d565b50508481036040860152611a1681898b6118c5565b925050508281036060840152611a2d81858761190c565b9a9950505050505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082821015611a7957611a79611a51565b500390565b6000600019821415611a9257611a92611a51565b5060010190565b634e487b7160e01b600052604160045260246000fd5b60008219821115611ac257611ac2611a51565b500190565b600082611ae457634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fd5b6000816000190483118215151615611b1957611b19611a51565b500290565b600060208284031215611b3057600080fd5b815180151581146114dc57600080fd5b60008251611b52818460208701611844565b9190910192915050565b6020815260006114dc602083018461187056fea264697066735822122087d843e732d37ebc366fc899e1c13ea4a2e362b32a32bce4514d3ac5a473fcd764736f6c63430008090033";
var FarmingRewards__factory = /** @class */ (function (_super) {
    __extends(FarmingRewards__factory, _super);
    function FarmingRewards__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    FarmingRewards__factory.prototype.deploy = function (_sigsVerifier, overrides) {
        return _super.prototype.deploy.call(this, _sigsVerifier, overrides || {});
    };
    FarmingRewards__factory.prototype.getDeployTransaction = function (_sigsVerifier, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _sigsVerifier, overrides || {});
    };
    FarmingRewards__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    FarmingRewards__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    FarmingRewards__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    FarmingRewards__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    FarmingRewards__factory.bytecode = _bytecode;
    FarmingRewards__factory.abi = _abi;
    return FarmingRewards__factory;
}(ethers_1.ContractFactory));
exports.FarmingRewards__factory = FarmingRewards__factory;
