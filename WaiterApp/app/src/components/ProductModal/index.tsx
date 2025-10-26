import { FlatList, Modal } from 'react-native';


import { Image, CloseButton, ModalBody, Header, IngredientsContainer, Ingredient, Footer, FooterContainer, PriceContainer } from './styles';

import { Product } from '../../types/Product';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';

type ProductModalProps = {
  visible: boolean;
  onClose: () => void;
  product: null | Product;

  onAddToCart: (product: Product) => void;

}

export function ProductModal({ visible, onClose, product, onAddToCart }: ProductModalProps) {

  if (!product) {
    return null;
  }

  function handleAddToCart() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    onAddToCart(product!);
    onClose();
  }

  return (
    <Modal onRequestClose={onClose} animationType='slide' presentationStyle='pageSheet' visible={visible}>
      <Image source={{ uri: `${process.env.VITE_API_URL}/uploads/${product.imagePath}` }}>
        <CloseButton onPress={onClose}>
          <Close />
        </CloseButton>
      </Image>

      <ModalBody>
        <Header>
          <Text size={24} weight='600'>{product.name}</Text>
          <Text style={{ marginTop: 8 }} color='#666'>{product.description}</Text>
        </Header>

        {product.ingredients.length > 0 && (
          <IngredientsContainer>
            <Text weight='600' color='#666'>Ingredientes</Text>

            <FlatList
              style={{ marginTop: 16 }}
              data={product.ingredients}
              keyExtractor={ingredient => ingredient._id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item: ingredient }) => (
                <Ingredient>
                  <Text>{ingredient.icon}</Text>
                  <Text style={{ marginLeft: 20 }} size={14} color='#666'>{ingredient.name}</Text>
                </Ingredient>
              )}
            />
          </IngredientsContainer>
        )}

      </ModalBody>

      <Footer>
        <FooterContainer>
          <PriceContainer>
            <Text color='#666'>Preço</Text>
            <Text size={20} weight='600'>{formatCurrency(product.price)}</Text>
          </PriceContainer>

          <Button onPress={() => handleAddToCart()}>Adicionar ao pedido</Button>
        </FooterContainer>
      </Footer>

    </Modal>
  );
}
