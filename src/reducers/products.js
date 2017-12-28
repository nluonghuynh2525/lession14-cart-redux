var initialState = [
    {
        id: 1, 
        name: 'Iphone 7 Plus',
        image: 'http://techhubonline.com/wp-content/uploads/sites/10/2016/12/iphone-7-plus-red-3.jpg',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 10,
        rating: 4
    },
    {
        id: 2, 
        name: 'SamSung Galaxy',
        image: 'https://s7d2.scene7.com/is/image/SamsungUS/Pdpkeyfeature-sm-g935azdaatt-600x600-C1-062016?$product-details-jpg$',
        description: 'Sản phẩm do samsung sản xuất',
        price: 700,
        inventory: 15,
        rating: 3
    },
    {
        id: 3, 
        name: 'Oppo f1 plus',
        image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2017/2/9/636222506137676408_f1s-2.jpg',
        description: 'Sản phẩm do china sản xuất',
        price: 500,
        inventory: 6,
        rating: 5
    }
];

const product = (state = initialState, action) => {
    switch(action.type) {
        default: return state;
    }
}

export default product;