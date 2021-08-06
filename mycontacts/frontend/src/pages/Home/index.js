import { Link } from 'react-router-dom';
import {
  Container, Header, ListContainer, Card,
  InputSearchContainer,
} from './styles';

import arrow from '../../assets/images/arrow.svg';
import edit from '../../assets/images/edit.svg';
import trash from '../../assets/images/trash.svg';
import Modal from '../../components/Modal';

export default function Home() {
  return (
    <Container>
      <Modal />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome" />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Seta" />
          </button>
        </header>
      </ListContainer>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Felipe Ramalho</strong>
            <small>instagram</small>
          </div>

          <span>felipe@email</span>
          <span>(31) 9999-9999</span>
        </div>

        <div className="actions">
          <Link to="/edit/123"><img src={edit} alt="Editar" /></Link>
          <button type="button">
            <img src={trash} alt="Excluir" />
          </button>
        </div>
      </Card>

    </Container>
  );
}