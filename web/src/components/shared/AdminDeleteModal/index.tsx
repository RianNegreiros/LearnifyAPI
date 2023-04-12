import { Modal, Row, Col } from 'react-bootstrap'
import { faTrash, faTimes } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css'
import StyledButton from '@/components/shared/StyledButton'

interface AdminDeleteModalProps {
  show: boolean,
  handleClose: (success?: boolean) => void,
  target: String
}

export default function AdminDeleteModal({ handleClose, show, target }: AdminDeleteModalProps) {
  return (
    <Modal show={show} onHide={handleClose} className={styles.modal} animation={true}>
      <Modal.Body className={styles.modal_body}>
        Are sure you wanna delete {target}?

        <Row>
          <Col lg={6} xs>
            <div onClick={() => handleClose(true)}>
              <StyledButton icon={faTrash} action={"Delete"} type_button="red" />
            </div>
          </Col>

          <Col lg={6} xs>
            <div onClick={() => handleClose(true)}>
              <StyledButton icon={faTimes} action={"Cancel"} type_button="blue" />
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  )
}