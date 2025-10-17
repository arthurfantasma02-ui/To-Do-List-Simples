import React from "react";
import styled from "styled-components";
import ProductList from "./components/ProductList";

// Container geral da página
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
`;

// Header estilizado
const Header = styled.header`
  background: linear-gradient(135deg, #1DB954, #17a44b);
  text-align: center;
  padding: 2rem 1rem;
  color: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  font-weight: 700;
`;

// Section sobre nós
const AboutSection = styled.section`
  background: #f0f0f0;
  padding: 4rem 1rem;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
  color: #333;
`;

// Footer
const Footer = styled.footer`
  background: #1a1a1a;
  color: #fff;
  text-align: center;
  padding: 1.5rem 1rem;
  margin-top: auto;
`;

export default function App() {
  return (
    <PageContainer>
      <Header>
        <Title>Loja Gamer</Title>
      </Header>

      <main>
        <ProductList />
      </main>

      <AboutSection>
        <AboutTitle>Sobre Nós</AboutTitle>
        <AboutText>
          Somos apaixonados por tecnologia e acessórios gamers. Nosso objetivo
          é oferecer produtos de qualidade, combinando estilo, desempenho e design moderno.
        </AboutText>
      </AboutSection>

      <Footer>
        &copy; {new Date().getFullYear()}Loja Gamer. Todos os direitos reservados.
      </Footer>
    </PageContainer>
  );
}
