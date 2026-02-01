import Navbar from "../components/Navbar"
import Card from "../components/Card"
import { getDashboard, addDashboard } from "../services/authService"
import { useEffect, useState } from "react"
import useAuth from "../hooks/useAuth"
// import Input from "../components/Input"
// import Button from "../components/Button"

interface DashboardCard {
  id: number
  title: string
  content: string
}

export default function Dashboard() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const { user, logout } = useAuth()
  // const [content, setContent] = useState("")
  // const [title, setTitle] = useState("")

  useEffect(() => {
    const fetchDashboard = async () => {
      setLoading(true)
      try {
        const res = await getDashboard()
        setData(res.data)
      } catch (err: any) {
        setError(err.response?.data?.message || "Failed to load dashboard")
      } finally {
        setLoading(false)
      }
    }

    fetchDashboard()
  }, [])

if (loading) return <p>Loading...</p>
  if (error) return <p className="text-red-500">{error}</p>

  // const handleSubmit = async () => {
  //   try {
  //     await addDashboard({ title, content });
  //     const res = await getDashboard();
  //     setData(res.data);
  //     setTitle("");
  //     setContent("");
  //   } catch (err: any) {
  //     console.error(err);
  //     setError(err.response?.data?.message || "Failed to add dashboard");
  //   }
  // };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar user={user?.email} onLogout={logout} />

      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* <Card className="md:col-span-1">
      <Input
          label="Title"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          label="Content"
          placeholder="Enter content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button className="mt-2 w-full" onClick={handleSubmit}>Add</Button>
          </Card> */}
        { data ? data.map((card : DashboardCard) => (
          <Card key={card.id} className="md:col-span-1">
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p>{card.content}</p>
          </Card>
        )) : <h2>Nothing to display</h2> }
      </div>
    </div>
  )
}
