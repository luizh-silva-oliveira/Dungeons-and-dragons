import { History } from "./components/History";

import "./styles/global.scss";

import { Menu } from "./components/Menu";
import { Multiverse } from "./components/Multiverse";
import { ContentsGame } from "./components/ContentsGame";
import { Footer } from "./components/Footer";
import { GoTop } from "./components/GoTop";

function App() {
  return (
    <>
      <Menu />
      <History />
      <Multiverse />
      <ContentsGame />
      <Footer />
      <GoTop />
    </>
  );
}

export default App;
