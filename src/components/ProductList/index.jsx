import { ProductCard } from "./ProductCard";
import style from "../ProductList/styles.module.scss"

export const ProductList = ({ productList, addProductToCart }) => {
   return (
      <div className={style.productsContainer}>
         <ul className={style.productList}>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} addProductToCart={addProductToCart}/>
         ))}
         </ul>
      </div>
   );
};
