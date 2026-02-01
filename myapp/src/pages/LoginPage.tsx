import Card from "../components/Card"
import Input from "../components/Input"
import Button from "../components/Button"
import Container from "../components/Container"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async () => {
    try {
      await login(email, password)
      navigate("/dashboard")
    } catch {
      setError("Invalid credentials")
    }
  }

  return (
    <Container>
      <Card className="w-full max-w-sm space-y-4">
        <h2 className="text-xl font-semibold text-center">Login</h2>

        <Input
          label="Email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button className="w-full" onClick={handleSubmit}>Login</Button>
      </Card>
    </Container>
  )
}
