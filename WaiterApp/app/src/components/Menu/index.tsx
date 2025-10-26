import { FlatList } from 'react-native';

import { PlusCircle } from '../Icons/PlusCircle';
import { Text } from '../Text';

import { formatCurrency } from '../../utils/formatCurrency';

import { ProductContainer, Image, ProductDetails, Separator, AddToCartButton } from './styles';
import { ProductModal } from '../ProductModal';
import { useState } from 'react';
import { Product } from '../../types/Product';

type MenuProps = {
  onAddToCart: (product: Product) => void;
  products: Product[];
}

export function Menu({ onAddToCart, products }: MenuProps) {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);

  function handleOpenModal(product: Product) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  return (
    <>
      <ProductModal onAddToCart={onAddToCart} product={selectedProduct} onClose={() => setIsModalVisible(false)} visible={isModalVisible} />

      <FlatList
        data={products}
        keyExtractor={product => product._id}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => (
          <ProductContainer onPress={() => handleOpenModal(product)}>
            <Image source={{ uri: `${process.env.VITE_API_URL}/uploads/${product.imagePath}` }} />

            <ProductDetails>
              <Text weight='600'>{product.name}</Text>
              <Text color='#666' size={14} style={{ marginVertical: 8 }}>{product.description}</Text>
              <Text size={14} weight='600'>{formatCurrency(product.price)}</Text>
            </ProductDetails>

            <AddToCartButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddToCartButton>

          </ProductContainer>
        )}
      />
    </>
  );
}
