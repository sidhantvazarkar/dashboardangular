export interface Transaction {
  id: number;
  name: string;
  date: string;
  type: 'buy' | 'sell';  // Changed to match JSON data
  amount: number;
  price: number;
  coin: string;
  image: string;
}
