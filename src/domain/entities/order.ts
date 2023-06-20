class Order {
  number?: number;
  business?: string;
  user?: string;
  products?: object[];
  totalPrice?: number;

  constructor(props: any) {
    this.number = props.number;
    this.business = props.business;
    this.user = props.user;
    this.products = props.products;
    this.totalPrice = props.totalPrice;
  }
}

export default Order;
