import { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../types/CartItem';
import { Product } from '../../types/Product';
import { api } from '../../utils/api';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';
import { MinusCircle } from '../Icons/MinusCircle';
import { PlusCircle } from '../Icons/PlusCircle';
import { OrderConfirmedModal } from '../OrderConfirmedModal';
import { Text } from '../Text';
import { Actions, Image, Item, ProductContainer, QuantityContainer, ProductDetails, Summary, TotalContainer } from './styles';

type CartProps = {
  cartItems: CartItem[];
  onAdd: (product: Product) => void;
  onDrecement: (product: Product) => void;
  onConfirmOrder: () => void;
  selectedTable: string;
}

export function Cart({ cartItems, onAdd, onDrecement, onConfirmOrder, selectedTable }: CartProps) {

  const [isModalVisble, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const total = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);

  async function handleConfirmOrder() {

    setIsLoading(true);

    const payload = {
      table: selectedTable,
      products: cartItems.map((carItem) => ({
        product: carItem.product._id,
        quantity: carItem.quantity
      })),
    };

    await api.post('/orders', payload);
    setIsLoading(false);
    setIsModalVisible(true);
  }

  function handleOk() {
    onConfirmOrder();
    setIsModalVisible(false);
  }

  return (
    <>

      <OrderConfirmedModal onOk={handleOk} visible={isModalVisble} />

      {
        cartItems.length > 0 && (
          <FlatList
            data={cartItems}
            style={{ marginBottom: 20, maxHeight: 130 }}
            keyExtractor={cartItem => cartItem.product._id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: cartItem }) => (
              <Item>
                <ProductContainer>
                  <Image source={{ uri: `${process.env.VITE_API_URL}/uploads/${cartItem.product.imagePath}` }} />

                  <QuantityContainer>
                    <Text size={14} color='#666'>{cartItem.quantity}x</Text>
                  </QuantityContainer>

                  <ProductDetails>
                    <Text size={14} weight='600'>{cartItem.product.name}</Text>
                    <Text size={14} color='#666' style={{ marginTop: 4 }}>{formatCurrency(cartItem.product.price)}</Text>
                  </ProductDetails>

                </ProductContainer>

                <Actions>

                  <TouchableOpacity onPress={() => onAdd(cartItem.product)} style={{ marginRight: 24 }}>
                    <PlusCircle />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => onDrecement(cartItem.product)}>
                    <MinusCircle />
                  </TouchableOpacity>

                </Actions>
              </Item>
            )}
          />

        )
      }
      <Summary>
        <TotalContainer>
          {
            cartItems.length > 0 ? (
              <>
                <Text color='#666'>Total</Text>
                <Text size={20} weight='600'>{formatCurrency(total)}</Text></>
            ) : (
              <Text color='#999'>Seu carrinho está vazio</Text>
            )
          }
        </TotalContainer>

        <Button loading={isLoading} disabled={cartItems.length === 0} onPress={handleConfirmOrder}>Confirmar pedidos</Button>
      </Summary>
    </>
  );
}
