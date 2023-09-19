import { gameActions } from "../redux/gameSlice";
import { useAppDispatch } from "../redux/hooks";
import ModalButton from "./UI/ModalButton";
import FocusHoverWrapper from "./UI/FocusHoverWrapper";

export default function LossDialog() {
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2 className="text-center text-base mb-4">You lose</h2>
      <FocusHoverWrapper>
        <ModalButton
          type="button"
          onClick={() => dispatch(gameActions.startNewGame())}
        >
          Try again
        </ModalButton>
      </FocusHoverWrapper>
      <FocusHoverWrapper>
        <ModalButton
          type="button"
          onClick={() => dispatch(gameActions.abortGame())}
        >
          Quit
        </ModalButton>
      </FocusHoverWrapper>
    </div>
  );
}
