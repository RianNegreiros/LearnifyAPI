import Logo from '@/components/shared/Logo'
import { Col, Row, Container } from 'react-bootstrap'

export default function AdminFooter() {
  return (
    <Container className="p-4">
      <Row>
          <Col>
              <Logo />
          </Col>

          <Col>
              <span className="float-right">onebitcode.com • contato@onebitcode.com</span>
          </Col>
      </Row>
    </Container>
  )
}
