import AdminComponent from "@/components/shared/AdminComponent"
import withAuthAdmin from "@/components/withAuthAdmin"

const Home = () => {
  return (
    <AdminComponent>
      <h1>Admin</h1>
    </AdminComponent>
  )
}

export default withAuthAdmin(Home)