import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';

export default function NewContact() {
  return (
    <>
      <PageHeader
        title="Criar novo contato"
      />
      <ContactForm
        buttonLabel="Cadastrar"
      />
    </>
  );
}
