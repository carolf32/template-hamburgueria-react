import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import style from "../CartModal/styles.module.scss"

export const CartModal = ({ cartList, removeProductFromCart,setIsOpen, setCartList}) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div role="dialog" className={style.backgroundModal}>
         <div className={style.modalBox}>
            <div className={style.modalHeader}>
               <h2 className="body-600">Carrinho de compras</h2>
               <button aria-label="close" title="Fechar" onClick={()=>setIsOpen(false)}>
                  <MdClose size={21} />
               </button>
            </div>
            <div>
               <ul>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} removeProductFromCart={removeProductFromCart}/>
                  ))}
               </ul>
            </div>
            <div className={style.cartFooter}>
               <div className={style.cartTotal}>
                  <span className="body-600">Total</span>
                  <span className={`body-600 ${style.grey}`}>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
               </div>
               <button className={`body-600 ${style.buttonRemoveAll}`} onClick={()=>setCartList([])}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};
