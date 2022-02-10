import styled from 'styled-components';

//Cart
const WrapperCart = styled.div`
    padding: 10px;
    background-color: orange;
`;

const TitleCart = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const ContentCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  background-color:silver;
  border-radius:10px;
  margin-bottom: 10px;
`;

const ProductDetail = styled.div`
  flex-direction: row;
  display: flex;
  flex:2;
`;

const ImageContainer = styled.div`
    padding: 0.5rem;
    width:25%;
    flex:1;
`;

const ImageCart = styled.img`
    width: 100%;
    height: auto;
    align-self: center;
    border-radius:10px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex:2;
  flex-direction: column;
  justify-content: space-around;
`;

const PriceDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex:1;
`;

const ProductPrice = styled.div`
  font-size: 1.7rem;
  font-weight: 200;
`;

const ProductAmountContainer = styled.div`
   margin:0.5rem; 
`;

const ProductAmount = styled.div`
   font-size: 1.3rem;
   font-weight: 200; 
`;

export {
    WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details,
    PriceDetail, ProductPrice, ProductAmountContainer, ProductAmount, ImageContainer
}