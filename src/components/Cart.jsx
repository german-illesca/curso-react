import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, ImageContainer} from "./styledComponents";

const Cart = () => {
    const datos = useContext(CartContext);

    return (
        <>
            <WrapperCart>
                <TitleCart>Tu Carrito de Compras</TitleCart>
                {datos.carrito.length > 0 
                    ? <div className="div-flex">
                        <div>
                            <button type="button" className="btn btn-primary boton-cart" onClick={datos.removeAllItems}>Vaciar carrito</button>
                        </div>
                        <div>
                        <Link to="/"><button type="button" className="btn btn-primary boton-cart">Ir al catálogo</button></Link>
                        </div>
                        <div className="total-div">$ {datos.impTotal}</div>
                      </div>
                    : <div> 
                        <br/>
                        <span>
                            <b>Su carrito de compras se encuentra vacío</b>
                        </span>
                        <br/><br/>
                        <div>
                            <Link to="/"><button type="button" className="btn btn-primary boton-cart">Ir al catálogo</button></Link>
                        </div>
                      </div>
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