import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";

const Card = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
`;

const ImageContainer = styled.div`
  height: 410px;
  background-color: #f5f5f5;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

const InfoContainer = styled.div`
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
`;

const Price = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
  margin-top: auto;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      {product.image && (
        <ImageContainer>
          <Image src={product.image} alt={product.name} />
        </ImageContainer>
      )}
      <InfoContainer>
        <Title>{product.name}</Title>

        <Price>${product.price.toFixed(2)}</Price>
        <StyledLink to={`/products/${product.id}`}>
          <Button variant="product" text="Go to product" />
        </StyledLink>
      </InfoContainer>
    </Card>
  );
};

export default ProductCard;
