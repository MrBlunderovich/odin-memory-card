import Game from "./components/Game";
import { useAppSelector } from "./redux/hooks";
import Modal from "./components/Modal";
import StartDialog from "./components/StartDialog";

function App() {
  const { status } = useAppSelector((state) => state.game);
  return (
    <div className="_wrapper relative font-pressStart cursor-default min-h-screen [background-image:_url('/pokemon-bg.png')] bg-cover bg-center text-MainFont">
      {status === "standby" ? (
        <Modal>
          <StartDialog />
        </Modal>
      ) : (
        <Game />
      )}
    </div>
  );
}

export default App;
