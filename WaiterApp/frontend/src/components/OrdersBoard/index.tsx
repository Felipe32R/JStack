import { useState } from "react";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import { Board, OrdersContainer } from "./styles";
import { api } from "../../utils/api";
import { toast } from "react-toastify";

interface OrdersBoardProps {
  title: string;
  icon: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
  onOrderStatusChange: (orderId: string, status: Order['status']) => void;
}

export function OrdersBoard({ title, icon, orders, onCancelOrder, onOrderStatusChange }: OrdersBoardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal(order: Order) {
    setIsModalOpen(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setSelectedOrder(null);
  }

  async function handleChangeOrderStatus() {
    setIsLoading(true);

    const status = selectedOrder?.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE';

    await api.patch(`/orders/${selectedOrder?._id}`, { status })

    toast.success(`O pedido da mesa ${selectedOrder?.table} teve o status alterado!`)

    onOrderStatusChange(selectedOrder!._id, status)
    setIsLoading(false);
    setIsModalOpen(false);
  }

  async function handleCancelOrder() {
    setIsLoading(true);
    await api.delete(`/orders/${selectedOrder?._id}`);

    toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado!`)
    onCancelOrder(selectedOrder!._id);
    setIsLoading(false);
    setIsModalOpen(false);
  }

  return (
    <Board>
      <OrderModal
        selectedOrder={selectedOrder}
        visible={isModalOpen}
        handleCloseModal={handleCloseModal}
        onCancelOrder={handleCancelOrder}
        isLoading={isLoading}
        onChangeOrderStatus={handleChangeOrderStatus}
      />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length && (
        <OrdersContainer>
          {orders.map((order) => (
            <button key={order._id} onClick={() => handleOpenModal(order)}>
              <strong>Mesa: {order.table}</strong>
              <span>{order.products.length} {`${order.products.length > 1 ? 'itens' : 'item'}`}</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
