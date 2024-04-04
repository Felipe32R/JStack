import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";

import {
  CategoriesContainer,
  Container,
  Footer,
  FooterContainer,
  MenuContainer,
} from "./styles";
import TableModal from "../components/TableModal";
import { useState } from "react";

export function Main() {
  const [isTableModalVisible, setIsTableModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState("");

  function handleSaveTable(table: string) {
    setSelectedTable(table);
  }
  function handleCancelOrder() {
    setSelectedTable("");
  }

  return (
    <Container>
      <Header selectedTable={selectedTable} onCancelOrder={handleCancelOrder} />
      <CategoriesContainer>
        <Categories />
      </CategoriesContainer>
      <MenuContainer>
        <Menu />
      </MenuContainer>
      <Footer>
        <FooterContainer>
          {!selectedTable && (
            <Button onPress={() => setIsTableModalVisible(true)}>
              Novo pedido
            </Button>
          )}
        </FooterContainer>
      </Footer>
      <TableModal
        visible={isTableModalVisible}
        onClose={() => setIsTableModalVisible(false)}
        onSave={handleSaveTable}
      />
    </Container>
  );
}
