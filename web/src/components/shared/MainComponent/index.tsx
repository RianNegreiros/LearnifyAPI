import Footer from "@/components/shared/Footer/StoreFrontFooter"
import Header from "@/components/shared/Header/StoreFrontHeader"

interface Props {
  children: React.ReactNode
}

export default function MainComponent({ children }: Props) {
  return (
    <div className="d-flex flex-column sticky-footer-wrapper">
      <Header />
      <div className="container flex-fill">
        { children }
      </div>

      <Footer />
    </div>
  )
}