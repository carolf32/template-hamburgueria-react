import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const localCartList = localStorage.getItem("@CARTLIST");
   const [cartList, setCartList] = useState(localCartList ? JSON.parse(localCartList) : []);
   const [isOpen, setIsOpen] = useState(false)

   // useEffect montagem - carrega os produtos da API e joga em productList
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   // adição, exclusão, e exclusão geral do carrinho
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva


      useEffect(()=>{
         const loadPage = async () => {
            const response = await fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products");
            const json = await response.json();
            setProductList(json);
         }
         loadPage();
      },[])
   
      const addProductToCart = (product) => {
         setCartList([...cartList, product])
      }

      const removeProductFromCart = (product) => {
         const indexToRemove = cartList.findIndex(item => item.id === product.id)

         if(indexToRemove !== -1){
            const newCartList = [...cartList];
            newCartList.splice(indexToRemove,1);
            setCartList(newCartList)
         }

      }
   
      useEffect(()=>{
         localStorage.setItem("@CARTLIST", JSON.stringify(cartList))
      },[cartList])


   return (
      <>
         <Header setIsOpen={setIsOpen} cartList={cartList}/>
         <main>
            <ProductList productList={productList} addProductToCart={addProductToCart}/>
            {isOpen ? <CartModal setCartList={setCartList} cartList={cartList} removeProductFromCart={removeProductFromCart} setIsOpen={setIsOpen}/> : null}
         </main>
      </>
   );
};
