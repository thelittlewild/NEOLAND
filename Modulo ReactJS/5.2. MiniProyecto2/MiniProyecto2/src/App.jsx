import { useState, useEffect } from "react";
import "./App.css";
import { CharacterList, Footer, Header, Main, Title } from "./components";

const App = () => {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      );

      setCharacterList(data.results);
    })();
  }, []);

  return (
    <div className="Template">
      <Header>
        <Title text={"Characters"} />
      </Header>
      <Main>
        <CharacterList list={characterList} />
      </Main>
      <Footer>
        <p>Created by María</p>
        <img src="https://res.cloudinary.com/drt000pht/image/upload/v1692329377/tumblr_676bc73218d9983b15766faad93fd753_5fd98b5f_400_hlivjs.gif" />
        <p>Copyright</p>
      </Footer>
    </div>
  );
};

export default App;
