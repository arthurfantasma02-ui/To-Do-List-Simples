import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const theme = {
  colors: {
    green: "#1DB954",
    gray: "#6c757d",
    dark: "#1a1a1a",
    shadow: "rgba(0,0,0,0.2)",
    bgGradient: "linear-gradient(145deg, #f7f7f7, #eaeaea)"
  },
  radius: "18px",
  transition: "all 0.3s ease",
};

const CardContainer = styled.div`
  background: ${theme.colors.bgGradient};
  border-radius: ${theme.radius};
  box-shadow: 0 8px 18px ${theme.colors.shadow};
  width: 300px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: ${theme.transition};

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 12px 22px ${theme.colors.shadow};
  }
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
  color: ${theme.colors.dark};
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.p`
  font-size: 1.3rem;
  color: ${theme.colors.green};
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

const AddButton = styled.button`
  border: none;
  border-radius: 50px;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${theme.transition};
  color: white;
  background: ${({ adicionado }) =>
    adicionado ? theme.colors.green : theme.colors.gray};

  ${({ adicionado }) =>
    adicionado &&
    css`
      box-shadow: 0 0 15px rgba(29, 185, 84, 0.5);
    `}

  &:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export function CardProduto({ nome, preco, adicionado, onAdicionar }) {
  return (
    <CardContainer>
      <ProductName>{nome}</ProductName>
      <ProductPrice>R$ {preco}</ProductPrice>
      <AddButton adicionado={adicionado} onClick={onAdicionar}>
        {adicionado ? "✅ Adicionado" : "🛒 Adicionar ao carrinho"}
      </AddButton>
    </CardContainer>
  );
}

CardProduto.propTypes = {
  nome: PropTypes.string.isRequired,
  preco: PropTypes.string.isRequired,
  adicionado: PropTypes.bool,
  onAdicionar: PropTypes.func,
};

CardProduto.defaultProps = {
  adicionado: false,
  onAdicionar: () => {},
};
