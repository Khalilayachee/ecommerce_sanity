export interface Product {
    price: number;
    name: string;
    slug: {
        current: string;
    };
    stripe?: string;
    imageUrl: string;
    body?: any[];
    image: {
        _key: string;
        _type: string;
        asset: {
            _ref: string;
            _type: string;
        };
    }[];
}


export interface ProductId {
    name: string;
    price: number;
    stripeProductId: string;
    slug: {
        current: string;
    };
    quantity: number;
    body?: any[];
    image: {
          _key: string;
          _type: string;
          asset: {
            _ref: string;
            _type: string;
        };
    }[];
}