import { Modal, Platform, TouchableOpacity } from "react-native";

import { ModalBody, Overlay, Header, Form, Input } from "./styles";
import { Text } from "../Text";
import { Close } from "../Icons/Close";
import { Button } from "../Button";
import { useState } from "react";

interface TableModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

export default function TableModal({
  visible,
  onClose,
  onSave,
}: TableModalProps) {
  const [table, setTable] = useState("");

  function handleSave() {
    setTable("");
    onSave(table);
    onClose();
  }

  return (
    <Modal transparent visible={visible} animationType="fade">
      <Overlay behavior={Platform.OS === "android" ? "height" : "padding"}>
        <ModalBody>
          <Header>
            <Text weight="600">Informe a mesa</Text>
            <TouchableOpacity
              onPress={() => {
                onClose(), setTable("");
              }}
            >
              <Close color="#666" />
            </TouchableOpacity>
          </Header>
          <Form>
            <Input
              placeholder="Número da mesa"
              placeholderTextColor="#666"
              keyboardType="number-pad"
              onChangeText={setTable}
            />
            <Button onPress={handleSave} disabled={!table}>
              {" "}
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
