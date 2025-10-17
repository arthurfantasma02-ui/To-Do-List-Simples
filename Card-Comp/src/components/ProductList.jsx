import React, { useState, useCallback } from "react";
import { CardProduto } from "./CardProduto/CardProduto";
import styled from "styled-components";

// Container flex para os cards
const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  flex-wrap: wrap;
  padding: 3rem 1rem;
  background: linear-gradient(180deg, #ffffff, #e8f5e9);
`;

export default function ProductList() {
  const produtos = [
    { id: 1, nome: "Teclado Mecânico RGB", preco: "499,90" },
    { id: 2, nome: "Mouse Gamer Wireless", preco: "259,90" },
    { id: 3, nome: "Headset Gamer 7.1", preco: "349,90" },
  ];

  const [carrinho, setCarrinho] = useState(new Set());

  const toggleProduto = useCallback((id) => {
    setCarrinho(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  return (
    <ListContainer>
      {produtos.map(p => (
        <CardProduto
          key={p.id}
          nome={p.nome}
          preco={p.preco}
          adicionado={carrinho.has(p.id)}
          onAdicionar={() => toggleProduto(p.id)}
        />
      ))}
    </ListContainer>
  );
}
