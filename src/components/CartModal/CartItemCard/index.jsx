import { MdDelete } from "react-icons/md";
import style from "../CartItemCard/styles.module.scss"

export const CartItemCard = ({ product, removeProductFromCart }) => {
   return (
      <li>
         <div className={style.cartContainer}>
            <div className={style.cartLeft}>
               <img className={style.cartImg} src={product.img} alt={product.name} />
               <div>
                  <h3 className="heading3">{product.name}</h3>
                  <p className={`body-600 ${style.green}`}>R$ {product.price}.00</p>
               </div>
            </div>

            <button aria-label="delete" title="Remover item" onClick={()=>removeProductFromCart(product)} >
            <MdDelete size={21} />
            </button>   
         </div>
         
      </li>
   );
};
