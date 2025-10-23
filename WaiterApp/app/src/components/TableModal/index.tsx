import { useState } from 'react';
import { Modal, Platform, TouchableOpacity } from 'react-native';
import { Button } from '../Button';
import { Close } from '../Icons/Close';
import { Text } from '../Text';
import { Form, ModalBody, Overlay, Header, Input } from './styles';

type ITableModalProps = {
  visible: boolean;
  onClose: () => void;
  onSave: (table: string) => void;
}

export function TableModal({visible, onClose, onSave}: ITableModalProps) {

  const [table, setTable] = useState('');

  function handleSave(table: string) {
    setTable('');
    onSave(table);
    onClose();
  }

  return(
    <Modal animationType='fade' visible={visible} transparent>
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight='600'>Informe a mesa</Text>

            <TouchableOpacity onPress={onClose}>
              <Close color='#666'/>
            </TouchableOpacity>
          </Header>

          <Form>
            <Input keyboardType='number-pad' placeholder='Número da mesa' placeholderTextColor='#666' value={table} onChangeText={setTable}/>
            <Button disabled={table.length === 0} onPress={() => handleSave(table)}>Salvar</Button>
          </Form>

        </ModalBody>
      </Overlay>
    </Modal>
  );
}
