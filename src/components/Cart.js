import { useContext } from "react";
import { CartContext } from "./CartContext";
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, ImageContainer} from "./styledComponents";

const Cart = () => {
    const datos = useContext(CartContext);

    return (
        <>
            <WrapperCart>
                <TitleCart>Tu Carrito de Compras</TitleCart>
                {datos.carrito.length > 0 
                    ? <button type="button" className="btn btn-primary boton-vaciar" onClick={datos.removeAllItems}>Vaciar carrito</button>
                    : <span>
                        <b>Su carrito de compras se encuentra vacío</b>
                      </span>
                }       
                <ContentCart>
                    {
                        datos.carrito.map( (item, index) => 
                            <Product key={index}>
                                <ProductDetail>
                                    <ImageContainer>
                                        <ImageCart src={item.urlImagen} alt={item.nombre}/>
                                    </ImageContainer>
                                    <Details>
                                    <span>
                                        <b>{item.nombre}</b>
                                    </span>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                    <ProductAmount>{item.cantidad} unidades</ProductAmount>
                                    </ProductAmountContainer>
                                    <ProductPrice>$ {item.precio} c/uno</ProductPrice>
                                    <button type="button" className="btn btn-primary boton-quitar" onClick={() => datos.removeItem(item)}>Quitar</button>
                                </PriceDetail>
                            </Product>
                        )
                    }
                </ContentCart>
            </WrapperCart>
        </>
    )
}

export default Cart;