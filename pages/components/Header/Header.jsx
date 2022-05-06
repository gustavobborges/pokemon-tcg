import * as S from './styles';

import IconPokeball from '../../assets/icons/poke2.png'

const Header = () => {
  return (
    <S.Container>
      <S.Header>
        <div className="pokeball"></div>
        <div className="title">
          <h1>POKÉALBUM</h1>
        </div>
        <div className="pokeball"></div>
      </S.Header>
      

      <S.Menu>
        <p>CARTAS</p>
        <p>ALBUNS</p>
      </S.Menu>

    </S.Container>
  )
}

export default Header;