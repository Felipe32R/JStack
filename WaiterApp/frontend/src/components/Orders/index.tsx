import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";
export function Orders() {
  const orders: Order[] = [
    {
      _id: "11",
      status: "IN_PRODUCTION",
      table: "tb",
      products: [
        {
          _id: "22",
          quantity: 2,
          product: {
            name: "a",
            imagePath: "1708998399273-frango-catupiry.png",
            price: 55,
          },
        },
      ],
    },
    {
      _id: "11",
      status: "DONE",
      table: "tabb",
      products: [
        {
          _id: "22",
          quantity: 2,
          product: {
            name: "a",
            imagePath: "1708998399273-frango-catupiry.png",
            price: 55,
          },
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
