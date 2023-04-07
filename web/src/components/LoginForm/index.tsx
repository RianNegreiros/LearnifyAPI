import { InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap'
import BlueBackground from '@/components/shared/BlueBackground'

interface LoginProps {
  title: string,
  buttonText: string
}

export default function LoginForm({ title, buttonText }: LoginProps) {
  return (
      <Row>
        <Col lg={{span: 6, offset: 3}} md={{span: 8, offset: 2}}>
          <BlueBackground>
            <h4>{title}</h4>

            <InputGroup className="mt-3">
                <FormControl placeholder="E-mail" />
            </InputGroup>

            <InputGroup className="mt-3">
                <FormControl placeholder="Password" />
            </InputGroup>

            <Button className="btn btn-info mt-3 w-100">{buttonText}</Button>
          </BlueBackground>
        </Col>
      </Row>
  )
}