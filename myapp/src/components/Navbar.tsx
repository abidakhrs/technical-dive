import Button from "./Button"

interface NavbarProps {
  user: string
  onLogout: () => void
}

export default function Navbar({user, onLogout}: NavbarProps) {
  return (
    <div className="bg-white shadow px-6 py-3 flex justify-between items-center">
      <h1 className="font-semibold text-lg">My App</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">{user}</span>
        <Button variant="secondary" onClick={onLogout}>
          Logout
        </Button>
      </div>
    </div>
  )
}
