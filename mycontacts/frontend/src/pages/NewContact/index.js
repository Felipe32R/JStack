import Button from '../../components/Button';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';

export default function NewContact() {
  return (
    <>
      <PageHeader
        title="Criar novo contato"
      />
      <Input type="text" placeholder="Nome" />

      <Select>
        <option value="1">Instagram</option>
        <option value="1">Instagram</option>
        <option value="1">Instagram</option>
      </Select>

      <Button type="button">
        Salvar alterações
      </Button>
    </>
  );
}
