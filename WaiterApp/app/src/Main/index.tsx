import { Categories } from "../components/Categories";
import { Header } from "../components/Header";

import {
  CategoriesContainer,
  Container,
  Footer,
  FooterContainer,
  MenuContainer,
} from "./styles";

export function Main() {
  return (
    <Container>
      <Header />
      <CategoriesContainer>
        <Categories />
      </CategoriesContainer>
      <MenuContainer></MenuContainer>
      <Footer>
        <FooterContainer></FooterContainer>
      </Footer>
    </Container>
  );
}
