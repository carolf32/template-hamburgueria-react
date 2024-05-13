import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import style from "../Header/styles.module.scss"

export const Header = ({setIsOpen,cartList}) => {
   const [value, setValue] = useState("");

   return (
      <header>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button onClick={()=>setIsOpen(true)} className={style.cartButton}>
                <MdShoppingCart size={21} />
                <span>{cartList.length>0 ? cartList.length : 0}</span>
            </button>
            {/* <form>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form> */}
         </div>
      </header>
   );
};
