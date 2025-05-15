import styled from "styled-components";

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
