import { useEffect, useState } from "react";
import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";
import { api } from "../../utils/api";
import socketIo from 'socket.io-client'

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    api.get('/orders').then(({ data }) => {
      setOrders(data)
    });
  }, [])

  useEffect(() => {
    const socket = socketIo("http://localhost:3001", {
      transports: ["websocket"],
    });

    socket.on("orders@new", (order: Order) => {
      setOrders((prevOrders) => {

        const alreadyExists = prevOrders.some((o) => o._id === order._id);
        if (alreadyExists) return prevOrders;
        return [order, ...prevOrders];
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);




  const waiting = orders.filter((order) => order.status === 'WAITING');
  const inProduction = orders.filter((order) => order.status === 'IN_PRODUCTION');
  const done = orders.filter((order) => order.status === 'DONE');


  function handleCancelOrder(orderId: string) {
    setOrders((prevState) => prevState.filter(order => order._id !== orderId))
  }

  function handleOrderStatusChange(orderId: string, status: Order['status']) {
    setOrders((prevState) => prevState.map((order) => (
      order._id === orderId ? { ...order, status } : order
    )))
  }

  return (
    <Container>
      <OrdersBoard title="Fila de espera" icon="🕑" orders={waiting} onCancelOrder={handleCancelOrder} onOrderStatusChange={handleOrderStatusChange} />
      <OrdersBoard title="Em preparação" icon="👨‍🍳" orders={inProduction} onCancelOrder={handleCancelOrder} onOrderStatusChange={handleOrderStatusChange} />
      <OrdersBoard title="Pronto" icon="✅" orders={done} onCancelOrder={handleCancelOrder} onOrderStatusChange={handleOrderStatusChange} />
    </Container>
  );
}
