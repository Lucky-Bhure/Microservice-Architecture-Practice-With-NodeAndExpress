import Product from "../models/product.js";

export async function createProduct (req, res) {
    try {

        const {title, image_url, quantity, seller, price } = req.body;

        const newProduct = new Product({title, image_url, quantity, seller, price});

        await newProduct.save();

        res.status(201).json(
            { 
                message: "New product created successfully",
                product: newProduct
             }
        )
        
    } catch (error) {
        console.log("Error while creating product", error);
        res.status(400).json(
            { 
                message: "New product creation failed"
             }
        )
    }
}

export async function getProducts (req, res) {
    try {
        const productsData = await Product.find();
        res.status(200).json(productsData);
    } catch (error) {
        console.log("Error while getting products", error);
        res.status(400).json(
            { 
                message: "Failed to get products details"
            }
        )
    }
}

export async function getProduct (req, res) {
    try {
        const { id } = req.params; 
        console.log(id)
        const productData = await Product.findById(id);
        res.status(200).json(productData);
    } catch (error) {
        console.log("Error while getting product", error);
         res.status(400).json(
            { 
                message: "Failed to get products details"
             }
        )
    }
}

export async function updateProduct (req, res) {
    try {
        const {id} = req.params;
        const {title, image_url, quantity, seller, price } = req.body;
        const response = await Product.findByIdAndUpdate(id, {
            title, image_url, quantity, seller, price
        });

        res.status(200).json({
            message: "Product updated successfully",
            oldProduct: response});
    } catch (error) {
        console.log("Error while updating product", error);
    }
}

export async function deleteProduct (req, res) {
    try {
        const { id } = req.params;

        const response = await Product.findByIdAndDelete(id);

        res.status(200).json({
            message: "Product has been deleted",
            product: response
        })

    } catch (error) {
        console.log("Error while deleting product", error);
        res.status(400).json(
            { 
                message: "Failed to delete product"
             }
        )
    }
}