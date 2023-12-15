import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";

interface Props {
  show: boolean;
  startState: (e: React.MouseEvent, choice: string) => void;
}

const ChoiceModal = ({ startState, show }: Props) => {
  return (
    <Modal show={show} centered>
      <Modal.Header className="d-flex justify-content-center">
        <Modal.Title>Heart of Ice</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-evenly p-4">
        <Button className="me-2" onClick={(e) => startState(e, "Snowdancer")}>
          Killed Snowdancer, Saved Icefist
        </Button>
        <Button className="ms-2" onClick={(e) => startState(e, "Icefist")}>
          Killed Icefist, Saved Snowdancer
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default ChoiceModal;
