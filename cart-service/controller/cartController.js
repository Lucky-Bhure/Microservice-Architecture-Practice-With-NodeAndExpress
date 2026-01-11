import Cart from "../models/cart.js";

export async function addToCart (req, res) {
    try {
        const {title, image_url, quantity, price} = req.body;

        const newCartProduct = new Cart({title, image_url, quantity, price});

        newCartProduct.save();

        res.status(200).json({
            message: "New product is added to cart",
            product: newCartProduct
        });

    } catch (error) {
        console.log("Error while add product to cart");
        res.status(500).json({
            message: "Failed while add product to cart",
        });
    }
}

export async function getCartDetails (req, res) {
    try {

        const cartProducts = await Cart.find();

        return res.status(200).json({
            products: cartProducts,
        });

    } catch (error) {
        console.log("Error while getting cart data");
        res.status(500).json({
            message: "Failed while getting cart data",
        });
    }
}

export async function updateCartElement (req, res) {
    try {
        
        const {id} = req.params;
        const {quantity, price} = req.body;

        const product = await Cart.findById(id);

        if(!product) {
            return res.status(400).json({message: "Product not found"});
        }

        if(quantity < 1) {
            const result = await Cart.findByIdAndDelete(id);
            return res.status(200).json({
                message: "Product has been removed",
                product: result
            });
        }

        const updatedProduct = await Cart.findByIdAndUpdate(id, {quantity, price});
        res.status(200).json({
            message: "Product has been updated",
            product: updatedProduct
        })

    } catch (error) {
        console.log("Error while update product in cart");
        res.status(500).json({
            message: "Failed while update product in cart",
        });
    }
}

export async function deleteCartElement (req, res) {
    try {
        const { id } = req.params;

        const product = await Cart.findById(id);

        if(!product) {
            return res.status(400).json({message: "Product not found"});
        }

        const deletedProduct = await Cart.findByIdAndDelete(id);
        res.status(200).json({
            message: "Product has been deleted",
            deletedProduct
        })


    } catch (error) {
        console.log("Error while delete product in cart");
        res.status(500).json({
            message: "Failed while delete product in cart",
        });
    }
}