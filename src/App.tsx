import Game from "./components/Game";
import { useAppSelector } from "./redux/hooks";
import Modal from "./components/Modal";
import StartForm from "./components/StartForm";

function App() {
  const { inAction } = useAppSelector((state) => state.game);
  return (
    <div className="_wrapper font-pressStart cursor-default min-h-screen [background-image:_url('/pokemon-bg.png')] bg-cover bg-center text-MainFont">
      {inAction ? (
        <>
          <Game />
        </>
      ) : (
        <Modal>
          <StartForm />
        </Modal>
      )}
    </div>
  );
}

export default App;
