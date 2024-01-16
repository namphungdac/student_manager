export type TokenizedPostPriceType = 'fixed' | 'floor';

export const TokenizedPostPriceTypeMap = {
  0: 'fixed',
  1: 'floor',
};

export type TokenizedPostStatus = 'open' | 'hidden' | 'delete';

export const TokenizedPostStatusMap = {
  0: 'open',
  1: 'hidden',
  2: 'delete',
};

export type TransactionType =
  | 'publish'
  | 'buy'
  | 'change_price'
  | 'update_status';

export type PostOwnStatus = 'owned' | 'robbed';

export type TrackingFeeType = 'publisher' | 'protocol' | 'holder';

export const TrackingFeeTypeMap = {
  0: 'publisher',
  1: 'protocol',
  2: 'holder',
};

export enum TrackingFeeTypeEnum {
  publisher = 'publisher',
  protocol = 'protocol',
  holder = 'holder',
}

export const TokenizedPostFeeTypeMap = {
  0: 'publisher',
  1: 'protocol',
  2: 'holder',
};
export type UNIT =
  | 'wei'
  | 'kwei'
  | 'mwei'
  | 'gwei'
  | 'micro'
  | 'milli'
  | 'ether'
  | 'TEther';

/*
	Owner          string   `json:"owner"`
	TypePrice      uint8    `json:"type_price"`
	SellPriceInUsd *big.Int `json:"sell_price_in_usd"`
	PostId         string   `json:"post_id"`
	TxId           string   `json:"tx_id"`
	BlockTimestamp uint64   `json:"block_timestamp"`
	BlockNumber    uint64   `json:"block_number"`
	ChainId        uint64   `json:"chain_id"`
 */
export type PublishPostMessageKafka = {
  owner: string;
  type_price: number;
  sell_price_in_usd: number;
  post_id: string;
  tx_id: string;
  block_timestamp: number;
  block_number: number;
  chain_id: number;
  token_id: number;
};

export type PublishPost = {
  publisherAddress: string;
  priceType: TokenizedPostPriceType;
  sellPriceInUsd: number;
  postId: string;
  publishTnxHash: string;
  transactionTime: number;
  blockNumber: number;
  chainId: number;
  tokenId: number;
};

/*
	Owner          string   `json:"owner"`
	Buyer          string   `json:"buyer"`
	TypePrice      uint8    `json:"type_price"`
	PostId         string   `json:"post_id"`
	TokenPay       string   `json:"token_pay"`
	AmountInToken  *big.Int `json:"amount_in_token"`
	AmountInUsd    *big.Int `json:"amount_in_usd"`
	PostSupply     uint64   `json:"post_supply"`
	TxId           string   `json:"tx_id"`
	BlockTimestamp uint64   `json:"block_timestamp"`
	BlockNumber    uint64   `json:"block_number"`
	ChainId        uint64   `json:"chain_id"`
 */
export type BuyPostMessageKafka = {
  owner: string;
  buyer: string;
  type_price: number;
  post_id: string;
  token_pay: string;
  amount_in_token: number;
  amount_in_usd: number;
  post_supply: number;
  tx_id: string;
  block_timestamp: number;
  block_number: number;
  chain_id: number;
  token_id: number;
};

export type BuyPost = {
  publisherAddress: string;
  buyerAddress: string;
  priceType: TokenizedPostPriceType;
  postId: string;
  tokenPay: string;
  amountInToken: number;
  amountInUsd: number;
  postSupply: number;
  buyTnxHash: string;
  transactionTime: number;
  blockNumber: number;
  chainId: number;
  tokenId: number;
};

/*
	Owner          string `json:"owner"`
	PostId         string `json:"post_id"`
	Status         uint8  `json:"status"`
	ChainId        uint64 `json:"chain_id"`
	TxId           string `json:"tx_id"`
	BlockTimestamp uint64 `json:"block_timestamp"`
 */

export type UpdateStatusPostMessageKafka = {
  owner: string;
  post_id: string;
  status: number;
  chain_id: number;
  tx_id: string;
  block_timestamp: number;
};

export type UpdateStatusPost = {
  publisherAddress: string;
  postId: string;
  status: TokenizedPostStatus;
  chainId: number;
  txId: string;
  transactionTime: number;
};

/*
	TransactionType string `json:"transaction_type"`
	BlockTimestamp  uint64 `json:"block_timestamp"`
	PostId          string `json:"post_id"`
	ChainId         uint64 `json:"chain_id"`
	TxId            string `json:"tx_id"`
	BlockNumber     uint64 `json:"block_number"`
 */

export type TransactionHistoryMessageKafka = {
  transaction_type: string;
  block_timestamp: number;
  post_id: string;
  chain_id: number;
  tx_id: string;
  block_number: number;
  caller_address: string;
};

export type PostTransactionHistory = {
  transactionType: string;
  blockTimestamp: number;
  postId: string;
  chainId: number;
  txId: string;
  blockNumber: number;
  callerAddress: string;
};

/*
	Owner          string   `json:"owner"`
	PostId         string   `json:"post_id"`
	NewPrice       *big.Int `json:"new_price"`
	ChainId        uint64   `json:"chain_id"`
	TxId           string   `json:"tx_id"`
	BlockTimestamp uint64   `json:"block_timestamp"`
 */

export type ChangePricePostMessageKafka = {
  owner: string;
  post_id: string;
  new_price: number;
  chain_id: number;
  tx_id: string;
  block_timestamp: number;
};

export type ChangePricePost = {
  publisherAddress: string;
  postId: string;
  newPrice: number;
  chainId: number;
  txId: string;
  transactionTime: number;
};

export enum ITypeNotification {
  TOKENIZE_POST_PUBLISHED = 'tokenize_post_published',
  TOKENIZE_POST_BOUGHT = 'tokenize_post_bought',
  TOKENIZE_POST_ROBED = 'tokenize_post_robed',
}

export interface INotification {
  type: ITypeNotification;
  createdAt: Date;
  seen?: boolean | null;
  txId: string;
  postId: string;
  price: number;
  buyerId?: string;
  buyerAddress?: string;
}

export interface ITweet {
  id: string;
  type: string;
  text?: string;
  tokenizeData: {
    holders: string[];
    priceType: string;
    prevPrice: number | null;
    postSupply: number;
    initPrice: number;
    currentPrice: number | null;
    status: string;
    totalEarnedInUsd: number;
  };
}

export interface ITweetInfo {
  id: string;
  images: [{ src: string }] | null;
  video: { fileName: string } | null;
  text: string;
}

export interface IUserInfo {
  id: string;
  traderName: string;
  traderImg: string;
}

export interface IPostOwnHistory {
  postId: string;
  transactionTime: number;
  valueInUsd: number;
  traderId: string;
  priceType: string;
  postPriceInUsd: number;
}
