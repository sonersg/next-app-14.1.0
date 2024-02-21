export default interface IPost {
    userId: number;
    id: number;
    title: string;
    desc: string;
    img: string;
    slug: string;
    createdAt: string;
}

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    img: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}
