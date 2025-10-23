import { ModalBody, OrderDetails, Overlay, Actions } from "./styles";

import closeIcon from "../../assets/images/close-icon.svg";
import { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";
import { useEffect } from "react";

interface OrderModalProps {
  visible: boolean;
  selectedOrder: Order | null;
  handleCloseModal: () => void;
  onCancelOrder: () => void;
  onChangeOrderStatus: () => void;
  isLoading: boolean;
}

export function OrderModal({
  visible,
  selectedOrder,
  handleCloseModal,
  onCancelOrder,
  onChangeOrderStatus,
  isLoading
}: OrderModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleCloseModal]);

  if (!visible || !selectedOrder) {
    return null;
  }

  const total = selectedOrder.products.reduce((acc, { product, quantity }) => {
    return acc + product.price * quantity;
  }, 0);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {selectedOrder.table}</strong>
          <button onClick={handleCloseModal}>
            <img src={closeIcon} alt="Close" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>
          <div>
            <span>
              {selectedOrder.status === "WAITING" && "🕑"}
              {selectedOrder.status === "IN_PRODUCTION" && "👨‍🍳"}
              {selectedOrder.status === "DONE" && "✅"}
            </span>
            <strong>
              {selectedOrder.status === "WAITING" && "Fila de espera"}
              {selectedOrder.status === "IN_PRODUCTION" && "Em produção"}
              {selectedOrder.status === "DONE" && "Pronto"}
            </strong>
          </div>
        </div>
        <OrderDetails>
          <strong>Itens</strong>
          <div className="order-items">
            {selectedOrder.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="56"
                  height="28.51"
                />
                <span className="quantity">{quantity}x</span>
                <div className="details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="total">
            <span>Total</span>
            <strong>R$ {total}</strong>
          </div>
        </OrderDetails>

        <Actions>
          {selectedOrder.status !== 'DONE' && (
            <button className="primary" disabled={isLoading} onClick={onChangeOrderStatus}>
              <span>{selectedOrder.status === 'WAITING' ? '👨‍🍳' : '✅'}</span> <strong>{selectedOrder.status === 'WAITING' ? 'Iniciar Produção' : 'Concluir Pedido'}</strong>
            </button>
          )
          }
          <button type="button" className="secondary" onClick={onCancelOrder} disabled={isLoading}>
            <strong>Cancelar Pedido</strong>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
