const Product = require('../model/Product');
const Product_Detail = require('../model/ProductDetail');

class ProductController{
    
    //GET - api/product/showall
    showall(req, res){
        Product.find()
        .populate({path: 'categoryId', select: 'Cate_Name'})
        .then((products) => res.json(products))
        .catch((err) => res.status(500).json({error: err.message}))
    };

    //POST - api/product/create
    create(req, res){
        const product = new Product({
            product_Name: req.body.product_Name,
            description: req.body.description,
            image: req.body.image,
            categoryId: req.body.categoryId
        })

        product.save()
        .then((product) => res.json({message: "Created A New Product!", data: product}))
        .catch((err) => res.status(500).json({error: err.message}));
    };

    //DELETE - api/product/delete
    delete(req, res){
        Product.deleteOne({_id: req.body.product_id})
        .then(() => res.json({message: "Deleted A Product Successfully"}))
        .catch((err) => res.status(500).json({error: err.message}));
    };

    finding(req, res){
        
    };

    //PRODUCT DETAIL API BELOW !!!

    //POST - api/product/create_variable
    create_variable(req, res){
        const product_Detail = new Product_Detail({
            productId: req.body.productId,
            size: req.body.size,
            color: req.body.color,
            stock: req.body.stock,
            price: req.body.price
        })

        product_Detail.save()
        .then((product_Detail) => res.json({message: "Created A New Product!", data: product_Detail}))
        .catch((err) => res.status(500).json({error: err.message}));
    };

    //DELETE - api/product/delete_variable
    delete_variable(req, res){
        Product_Detail.deleteOne({_id: req.body.product_detail_id})
        .then(() => res.json({message: "Deleted A Product Successfully"}))
        .catch((err) => res.status(500).json({error: err.message}));
    };
};

module.exports = new ProductController();