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
exports.Govern__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "contract Staking",
                name: "_staking",
                type: "address"
            },
            {
                internalType: "address",
                name: "_celerTokenAddress",
                type: "address"
            },
            {
                internalType: "address",
                name: "_collector",
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
                indexed: false,
                internalType: "uint256",
                name: "proposalId",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "bool",
                name: "passed",
                type: "bool"
            },
            {
                indexed: false,
                internalType: "enum DataTypes.ParamName",
                name: "name",
                type: "uint8"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newValue",
                type: "uint256"
            },
        ],
        name: "ConfirmParamProposal",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "proposalId",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "address",
                name: "proposer",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "deposit",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "voteDeadline",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "enum DataTypes.ParamName",
                name: "name",
                type: "uint8"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "newValue",
                type: "uint256"
            },
        ],
        name: "CreateParamProposal",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: "uint256",
                name: "proposalId",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "address",
                name: "voter",
                type: "address"
            },
            {
                indexed: false,
                internalType: "enum Govern.VoteOption",
                name: "vote",
                type: "uint8"
            },
        ],
        name: "VoteParam",
        type: "event"
    },
    {
        inputs: [],
        name: "celerToken",
        outputs: [
            {
                internalType: "contract IERC20",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "collectForfeiture",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "collector",
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
        inputs: [
            {
                internalType: "uint256",
                name: "_proposalId",
                type: "uint256"
            },
        ],
        name: "confirmParamProposal",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum DataTypes.ParamName",
                name: "_name",
                type: "uint8"
            },
            {
                internalType: "uint256",
                name: "_value",
                type: "uint256"
            },
        ],
        name: "createParamProposal",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "forfeiture",
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
                internalType: "uint256",
                name: "_proposalId",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "_voter",
                type: "address"
            },
        ],
        name: "getParamProposalVote",
        outputs: [
            {
                internalType: "enum Govern.VoteOption",
                name: "",
                type: "uint8"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "nextParamProposalId",
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
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        name: "paramProposals",
        outputs: [
            {
                internalType: "address",
                name: "proposer",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "deposit",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "voteDeadline",
                type: "uint256"
            },
            {
                internalType: "enum DataTypes.ParamName",
                name: "name",
                type: "uint8"
            },
            {
                internalType: "uint256",
                name: "newValue",
                type: "uint256"
            },
            {
                internalType: "enum Govern.ProposalStatus",
                name: "status",
                type: "uint8"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "staking",
        outputs: [
            {
                internalType: "contract Staking",
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
                internalType: "uint256",
                name: "_proposalId",
                type: "uint256"
            },
            {
                internalType: "enum Govern.VoteOption",
                name: "_vote",
                type: "uint8"
            },
        ],
        name: "voteParam",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
];
var _bytecode = "0x60e06040523480156200001157600080fd5b50604051620015f7380380620015f783398101604081905262000034916200006b565b6001600160a01b0392831660805290821660a0521660c052620000bf565b6001600160a01b03811681146200006857600080fd5b50565b6000806000606084860312156200008157600080fd5b83516200008e8162000052565b6020850151909350620000a18162000052565b6040850151909250620000b48162000052565b809150509250925092565b60805160a05160c0516114c96200012e600039600081816101da0152610620015260008181610214015281816105fd0152818161095e0152610be10152600081816101040152818161026b01528181610653015281816108e101528181610a380152610b0c01526114c96000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c806382d7b4b811610081578063934a18ec1161005b578063934a18ec146101fc578063c6c21e9d1461020f578063e478ed9d1461023657600080fd5b806382d7b4b8146101c45780638338f0e5146101cc578063913e77ad146101d557600080fd5b80634cf088d9116100b25780634cf088d9146100ff578063581c53c51461013e5780637e5fb8f31461015e57600080fd5b806322da7927146100ce57806325ed6b35146100ea575b600080fd5b6100d760015481565b6040519081526020015b60405180910390f35b6100fd6100f8366004610fc5565b610249565b005b6101267f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100e1565b61015161014c36600461100a565b61056c565b6040516100e19190611059565b6101b261016c366004611067565b6000602081905290815260409020805460018201546002830154600384015460048501546005909501546001600160a01b03909416949293919260ff9182169290911686565b6040516100e196959493929190611090565b6100fd61059a565b6100d760025481565b6101267f000000000000000000000000000000000000000000000000000000000000000081565b6100fd61020a366004611067565b61064c565b6101267f000000000000000000000000000000000000000000000000000000000000000081565b6100fd6102443660046110e2565b6109fc565b33600360405163a310624f60e01b81526001600160a01b0383811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063a310624f9060240160206040518083038186803b1580156102ad57600080fd5b505afa1580156102c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e59190611112565b60038111156102f6576102f661102f565b146103485760405162461bcd60e51b815260206004820152601f60248201527f566f746572206973206e6f74206120626f6e6465642076616c696461746f720060448201526064015b60405180910390fd5b60008381526020819052604090206001600582015460ff1660028111156103715761037161102f565b146103be5760405162461bcd60e51b815260206004820152601760248201527f496e76616c69642070726f706f73616c20737461747573000000000000000000604482015260640161033f565b806002015443106104115760405162461bcd60e51b815260206004820152601460248201527f566f746520646561646c696e6520706173736564000000000000000000000000604482015260640161033f565b6001600160a01b038216600090815260068201602052604081205460ff1660038111156104405761044061102f565b1461048d5760405162461bcd60e51b815260206004820152600f60248201527f566f7465722068617320766f7465640000000000000000000000000000000000604482015260640161033f565b60008360038111156104a1576104a161102f565b14156104ef5760405162461bcd60e51b815260206004820152600c60248201527f496e76616c696420766f74650000000000000000000000000000000000000000604482015260640161033f565b6001600160a01b03821660009081526006820160205260409020805484919060ff191660018360038111156105265761052661102f565b02179055507f06c7ef6e19454637e93ee60cc680c61fb2ebabb57e58cf36d94141a5036b3d6584838560405161055e9392919061112f565b60405180910390a150505050565b6000828152602081815260408083206001600160a01b038516845260060190915290205460ff165b92915050565b6000600254116105ec5760405162461bcd60e51b815260206004820152601260248201527f4e6f7468696e6720746f20636f6c6c6563740000000000000000000000000000604482015260640161033f565b600254610645906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016907f000000000000000000000000000000000000000000000000000000000000000090610c6a565b6000600255565b60008060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316634021d4d56040518163ffffffff1660e01b815260040160006040518083038186803b1580156106aa57600080fd5b505afa1580156106be573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526106e691908101906111c2565b905060005b81518163ffffffff1610156107b557600161072986848463ffffffff168151811061071857610718611298565b60200260200101516000015161056c565b600381111561073a5761073a61102f565b141561077257818163ffffffff168151811061075857610758611298565b6020026020010151602001518461076f91906112c4565b93505b818163ffffffff168151811061078a5761078a611298565b602002602001015160200151836107a191906112c4565b9250806107ad816112dc565b9150506106eb565b50600060036107c5846002611300565b6107cf919061131f565b6107da9060016112c4565b60008681526020819052604090209085101591506001600582015460ff1660028111156108095761080961102f565b146108565760405162461bcd60e51b815260206004820152601760248201527f496e76616c69642070726f706f73616c20737461747573000000000000000000604482015260640161033f565b80600201544310156108aa5760405162461bcd60e51b815260206004820152601960248201527f566f746520646561646c696e65206e6f74207265616368656400000000000000604482015260640161033f565b60058101805460ff19166002179055811561098f57600381015460048083015460405163e909156d60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169363e909156d936109189360ff9092169201611341565b600060405180830381600087803b15801561093257600080fd5b505af1158015610946573d6000803e3d6000fd5b50508254600184015461098a93506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116935090911690610c6a565b6109ab565b8060010154600260008282546109a591906112c4565b90915550505b600381015460048201546040517fd0d659ab2c0f954d2f29cf2e13d8ff2e15e147f3424eb205a079c4caa6bfe1a9926109ec928a92879260ff16919061135c565b60405180910390a1505050505050565b60018054600081815260208190526040902091610a1991906112c4565b600155604051631042b80b60e21b815233906000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063410ae02c90610a6d908490600401611387565b60206040518083038186803b158015610a8557600080fd5b505afa158015610a99573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610abd9190611395565b83547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b038481169190911785556001808601839055604051631042b80b60e21b81529293507f00000000000000000000000000000000000000000000000000000000000000009091169163410ae02c91610b4191600401611387565b60206040518083038186803b158015610b5957600080fd5b505afa158015610b6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b919190611395565b610b9b90436112c4565b600284015560038301805486919060ff19166001836008811115610bc157610bc161102f565b02179055506004830184905560058301805460ff19166001179055610c117f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316833084610cff565b7f4a4d354dbdc4d7b757c1f44b6e074bb6e1afe33f4b9867ce48cfb7004d76f16060018054610c4091906113ae565b838386600201548989604051610c5b969594939291906113c5565b60405180910390a15050505050565b6040516001600160a01b038316602482015260448101829052610cfa90849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610d3d565b505050565b6040516001600160a01b0380851660248301528316604482015260648101829052610d379085906323b872dd60e01b90608401610c96565b50505050565b6000610d92826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610e229092919063ffffffff16565b805190915015610cfa5780806020019051810190610db091906113f6565b610cfa5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161033f565b6060610e318484600085610e3b565b90505b9392505050565b606082471015610eb35760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161033f565b843b610f015760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161033f565b600080866001600160a01b03168587604051610f1d9190611444565b60006040518083038185875af1925050503d8060008114610f5a576040519150601f19603f3d011682016040523d82523d6000602084013e610f5f565b606091505b5091509150610f6f828286610f7c565b925050505b949350505050565b60608315610f8b575081610e34565b825115610f9b5782518084602001fd5b8160405162461bcd60e51b815260040161033f9190611460565b60048110610fc257600080fd5b50565b60008060408385031215610fd857600080fd5b823591506020830135610fea81610fb5565b809150509250929050565b6001600160a01b0381168114610fc257600080fd5b6000806040838503121561101d57600080fd5b823591506020830135610fea81610ff5565b634e487b7160e01b600052602160045260246000fd5b600481106110555761105561102f565b9052565b602081016105948284611045565b60006020828403121561107957600080fd5b5035919050565b600981106110555761105561102f565b6001600160a01b0387168152602081018690526040810185905260c081016110bb6060830186611080565b836080830152600383106110d1576110d161102f565b8260a0830152979650505050505050565b600080604083850312156110f557600080fd5b82356009811061110457600080fd5b946020939093013593505050565b60006020828403121561112457600080fd5b8151610e3481610fb5565b8381526001600160a01b038316602082015260608101610f746040830184611045565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561118b5761118b611152565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156111ba576111ba611152565b604052919050565b600060208083850312156111d557600080fd5b825167ffffffffffffffff808211156111ed57600080fd5b818501915085601f83011261120157600080fd5b81518181111561121357611213611152565b611221848260051b01611191565b818152848101925060069190911b83018401908782111561124157600080fd5b928401925b8184101561128d576040848903121561125f5760008081fd5b611267611168565b845161127281610ff5565b81528486015186820152835260409093019291840191611246565b979650505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156112d7576112d76112ae565b500190565b600063ffffffff808316818114156112f6576112f66112ae565b6001019392505050565b600081600019048311821515161561131a5761131a6112ae565b500290565b60008261133c57634e487b7160e01b600052601260045260246000fd5b500490565b6040810161134f8285611080565b8260208301529392505050565b8481528315156020820152608081016113786040830185611080565b82606083015295945050505050565b602081016105948284611080565b6000602082840312156113a757600080fd5b5051919050565b6000828210156113c0576113c06112ae565b500390565b8681526001600160a01b0386166020820152604081018590526060810184905260c081016110d16080830185611080565b60006020828403121561140857600080fd5b81518015158114610e3457600080fd5b60005b8381101561143357818101518382015260200161141b565b83811115610d375750506000910152565b60008251611456818460208701611418565b9190910192915050565b602081526000825180602084015261147f816040850160208701611418565b601f01601f1916919091016040019291505056fea2646970667358221220fb3c9e9a963ac2ebc0792181bffdd61599331b178d90ee6eee09b9a3d8b9daf964736f6c63430008090033";
var Govern__factory = /** @class */ (function (_super) {
    __extends(Govern__factory, _super);
    function Govern__factory(signer) {
        return _super.call(this, _abi, _bytecode, signer) || this;
    }
    Govern__factory.prototype.deploy = function (_staking, _celerTokenAddress, _collector, overrides) {
        return _super.prototype.deploy.call(this, _staking, _celerTokenAddress, _collector, overrides || {});
    };
    Govern__factory.prototype.getDeployTransaction = function (_staking, _celerTokenAddress, _collector, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _staking, _celerTokenAddress, _collector, overrides || {});
    };
    Govern__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    Govern__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    Govern__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    Govern__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    Govern__factory.bytecode = _bytecode;
    Govern__factory.abi = _abi;
    return Govern__factory;
}(ethers_1.ContractFactory));
exports.Govern__factory = Govern__factory;
