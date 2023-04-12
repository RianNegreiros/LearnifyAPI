import LoginForm from "@/components/LoginForm"
import SignUpForm from "@/components/SignUpForm"
import MainComponent from "@/components/shared/MainComponent"

export default function Login() {
  return (
    <MainComponent>
      <LoginForm title="Sign In" buttonText="Login" />
      <br />
      <SignUpForm title="Sign Up" buttonText="Sign Up" />
    </MainComponent>
  )
}