import { useContext } from "react";
import { CartContext } from "./CartContext";
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice} from "./styledComponents";

const Cart = () => {
    const datos = useContext(CartContext);

    return (
        <>
            <WrapperCart>
                <TitleCart>Tu Carrito de Compras</TitleCart>
                <ContentCart>
                <p>{datos.carrito}</p>
                    {
                        datos.carrito.map( (item, index) => {
                            <Product>
                                <ProductDetail>
                                    <ImageCart src="https://res.cloudinary.com/hdsqazxtw/image/upload/v1559681445/logo_coderhouse_1_rec5vl.png" />
                                    <Details>
                                    <span>
                                        <b>Producto:</b> JESSIE THUNDER SHOES
                                    </span>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                    <ProductAmount>2 unidades</ProductAmount>
                                    </ProductAmountContainer>
                                    <ProductPrice>$ 30 c/uno</ProductPrice>
                                </PriceDetail>
                            </Product>
                        })
                    }
                </ContentCart>
            </WrapperCart>
        </>
    )
}

export default Cart;