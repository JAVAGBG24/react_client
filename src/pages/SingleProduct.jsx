import styled from "styled-components";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/productService";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageSection = styled.div`
  background-color: #f5f5f5;
  border-radius: 15px;
  overflow: hidden;
  height: 600px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Price = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 2rem;
`;

const Category = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 1rem;
`;

const Stock = styled.p`
  font-size: 1rem;
  color: ${(props) => (props.$inStock ? "#28a745" : "#dc3545")};
  font-weight: 500;
  margin-bottom: 2rem;
`;

const Color = styled.p`
  font-size: 1rem;
  color: #777;
  margin-bottom: 1rem;
`;

const LoadingMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 2rem;
`;

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        setError("Failed to load product.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <Container>
        <LoadingMessage>Loading product...</LoadingMessage>
      </Container>
    );
  }

  return (
    <Container>
      <ProductGrid>
        <ImageSection>
          <ProductImage
            src={product.image || "/placeholder.png"}
            alt={product.name}
          />
        </ImageSection>

        <InfoSection>
          <Title>{product.name}</Title>
          <Price>{product.price.toFixed(2)}</Price>

          {product.category && (
            <Category>Category: {product.category}</Category>
          )}

          {product.color && <Color>Color: {product.color}</Color>}

          <Stock $inStock={product.inStock}>
            {product.inStock ? "In stock" : "Out of stock"}
          </Stock>

          {product.description && (
            <Description>{product.description}</Description>
          )}
        </InfoSection>
      </ProductGrid>
    </Container>
  );
};

export default SingleProduct;
