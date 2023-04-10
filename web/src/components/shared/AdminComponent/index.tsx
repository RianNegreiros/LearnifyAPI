import { Col, Row } from 'react-bootstrap'
import AdminHeader from '@/components/shared/Header/AdminHeader'
import AdminFooter from '@/components/shared/Footer/AdminFooter'

interface AdminComponentProps {
  children: React.ReactNode
}

export default function AdminComponent({ children }: AdminComponentProps) {
  return (
    <Row className="mr-lg-4">
        <Col lg={3}>
            Menu
        </Col>

        <Col lg={9}>
            <div className="d-flex flex-column sticky-footer-wrapper container">
                <AdminHeader name="User name" />
                <div className="flex-fill text-center">
                    { children }
                </div>
                <AdminFooter />
            </div>
        </Col>
    </Row>
  )
}
