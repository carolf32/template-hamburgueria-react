import style from "../ProductCard/styles.module.scss"

export const ProductCard = ({ product, addProductToCart }) => {
    return(
        <li className={style.productCard}>
            <img src={product.img} alt={product.name} className={style.productImg}/>
            <div className={style.productInfo}>
                <h3 className="heading3">{product.name}</h3>
                <span className="caption">{product.category}</span>
                <span className={`${style.green} body-600`}>{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className={`${style.addButton} body-600`} onClick={()=>addProductToCart(product)}>Adicionar</button>
            </div>
        </li>
    )
}