class User {
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: string;
  orders?: any[];

  constructor(props: any) {
    this.firstName = props.firstName;
    this.lastName = props.lastName;
    this.email = props.email;
    this.role = props.role;
    this.orders = props.orders;
  }
}

export default User;
