import LoginForm from "@/components/LoginForm"
import MainComponent from "@/components/shared/MainComponent"

export default function Login() {
  return (
    <MainComponent>
      <LoginForm title="Sign In" buttonText="Login" />
    </MainComponent>
  )
}