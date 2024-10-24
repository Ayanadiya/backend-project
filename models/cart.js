const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'cart.json'
);

module.exports= class Cart {
   static addproduct(id,productprice) {
         //fetch the previous cart
        fs.readFile(p, (err,fileContent)=>{
            let cart={products:[], totalprice:0};
            if(!err){
                cart=JSON.parse(fileContent);
            }
            //analyze the cart -find existing products
            const existingproductIndex=cart.products.findIndex(prod => prod.id=id);
            const existingproduct=cart[existingproductIndex];
            let updatedproduct;
            // add new product , increase quantity and price
            if(existingproduct){
                updatedproduct={...existingproduct};
                updatedproduct.qty=updatedproduct.qty+1;
                cart.products=[...cart.products];
                cart.products[existingproductIndex]=updatedproduct;
            }
            else
            {
                updatedproduct= { id:id, qty:1};
                cart.products=[...cart.products,updatedproduct];
            }
            cart.totalprice=cart.totalprice + +productprice;
            fs.writeFile(p, JSON.stringify(cart),err =>{
                console.log(err);
            })
        })
   }

   static deleteProduct(id, price) {
     fs.readFile(p, (err, fileContent) => {
        if(err)
        {
            return;
        }
        const updatedCart = {...cart};

        cart.totalpriceotalPrice= productPrice;
     })
   }
}