interface Address {
    city: string;
    geo: {
        lat: string;
        lng: string;
    }
    street: string;
    suite: string;
    zipcode: string;
}


interface Company {
    bs: string;
    catchPhrase: string;
    name: string;
}

interface Robot {
    id: number;
    name: string;
    email: string;
    phone: string;
    username: string;
    website: string;
    company: Company;
    address: Address;

}