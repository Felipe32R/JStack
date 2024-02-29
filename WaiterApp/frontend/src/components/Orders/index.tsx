import { Order } from "../../types/order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";
export function Orders() {
  const orders: Order[] = [
    {
      _id: "11",
      status: "a",
      table: "2",
      products: [
        {
          _id: "22",
          quantity: 2,
          product: { name: "a", imagePath: "a", price: 55 },
        },
      ],
    },
    {
      _id: "11",
      status: "a",
      table: "2",
      products: [
        {
          _id: "22",
          quantity: 2,
          product: { name: "a", imagePath: "a", price: 55 },
        },
      ],
    },
  ];
  return (
    <Container>
      <OrdersBoard title="Fila de espera" icon="🕑" orders={orders} />
      <OrdersBoard title="Em preparação" icon="👨‍🍳" orders={orders} />
      <OrdersBoard title="Pronto" icon="✅" orders={orders} />
    </Container>
  );
}
