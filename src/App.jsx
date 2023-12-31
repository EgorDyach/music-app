import MainPage from "./pages/MainPage";
import style from "./global.module.scss";
import Playbar from "./components/Playbar/PlaybarComponent.jsx";

const App = () => <div className={style.wrapper}>
  <MainPage />
  <Playbar />
  </div>;

export default App
