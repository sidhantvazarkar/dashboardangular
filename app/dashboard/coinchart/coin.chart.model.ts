export interface CoinHistory {
  low: number;
  high: number;
  current: number;
}

export interface Coin {
  id: number;
  name: string;
  symbol: string;
  image: string;
  history: {
    [key: string]: CoinHistory;
  };
}
