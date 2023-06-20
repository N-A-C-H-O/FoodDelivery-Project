class Business {
    name?: string;
    products?: any[];

    constructor(props: any) {
        this.name = props.name;
        this.products = props.products;
    }
}

export default Business;
