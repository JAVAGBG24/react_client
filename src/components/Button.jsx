import styled from "styled-components";

// stiliserad knappkomponent
const StyledButton = styled.button`
  // grundläggande knappstil
  padding: 1.3rem 3rem;
  border: 2px solid black;
  border-radius: 50px;
  background: none;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;

  // variant-specifika stilar
  ${(props) =>
    props.$variant === "auth" &&
    `
    background-color: black;
    color: white;
    padding: 10px 4rem;
    width: 100%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid transparent;
    outline: none;
    
    &:hover {
      background-color: rgb(62, 62, 63);
      box-shadow: 0 0 8px rgba(107, 114, 128, 0.5);
      transform: translateY(-2px);
    }
  `}

  ${(props) =>
    props.$variant === "product" &&
    `
    background-color: black;
    font-size: 14px;
    letter-spacing: 1px;
    color: white;
    padding: 10px 4rem;
    width: 100%;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid transparent;
    outline: none;
    
    &:hover {
      background-color: rgb(62, 62, 63);
      box-shadow: 0 0 8px rgba(107, 114, 128, 0.5);
      transform: translateY(-2px);
    }
  `}

   ${(props) =>
    props.$variant === "edit" &&
    `
    background-color: black;
    font-size: 12px;
    letter-spacing: 0.5px;
    color: white;
    font-weight: 500;
    padding: 7px 15px;
    border-radius: 7px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid transparent;
    outline: none;
    
    &:hover {
      background-color: rgb(62, 62, 63);
      box-shadow: 0 0 8px rgba(107, 114, 128, 0.5);
      transform: translateY(-2px);
    }
  `}

  // hantera disabled-tillstånd
  ${(props) =>
    props.disabled &&
    `
    opacity: 0.6;
    cursor: not-allowed;
  `}
`;

const Button = ({ text, onClick, disabled = false, variant, type }) => {
  return (
    <StyledButton
      type={type}
      $variant={variant}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
