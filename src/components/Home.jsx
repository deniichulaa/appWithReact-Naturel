import { Container } from 'react-bootstrap';

import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';


function Home() {
  return (
    <Container >
      
      <ItemListContainer/>

      <ItemDetailContainer/>

    </Container>
  );
}

export default Home;
