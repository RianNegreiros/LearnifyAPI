import withAuthAdmin from "@/components/withAuthAdmin"

const Home = () => {
  return (
    <div>
      <h1>Admin</h1>
    </div>
  )
}

export default withAuthAdmin(Home)