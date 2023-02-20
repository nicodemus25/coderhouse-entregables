class ProductManager{
      product; 
    constructor(){
        this.product = [];
     }
      
    getProduct = () => {
        return this.product;
    
     }

    addproduct = (title, description, price, thumbnail, code, stock) =>{
         const produc = {
          id: this.product.length +1,
          title,
          description,
          price,
          thumbnail,
          code,
          stock,

         };
         
         this.product.push(produc);
         
    };

    getProductById = (productid) => {
       const productindex = this.product.findIndex((produc) => produc.id === productid);

       if (productindex === -1) {
          console.log("not found");
          return;

       }

    };
      
     



}
let pm = new ProductManager();
console.log(pm.getProduct());
pm.addproduct("producto prueba", "este producto es una prueba", 200, "sin imagen", "abc123", 25);

pm.getProductById(2);

pm.getProduct();

console.log(pm.getProduct());

