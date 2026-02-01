import {
  createContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { loginApi } from "../services/authService";
import { jwtDecode } from "jwt-decode";

//
// ✅ define JWT payload shape
//
interface JwtPayload {
  id: number;
  email: string;
  exp: number;
}

interface AuthContextType {
  user: JwtPayload | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<JwtPayload | null>(null);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    window.location.href = "/login";
  };

  //
  // restore on refresh
  //
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) return;

    try {
      const decoded = jwtDecode<JwtPayload>(token);

      if (decoded.exp * 1000 < Date.now()) {
        logout();
      } else {
        setUser(decoded);
      }
    } catch {
      logout();
    }
  }, []);

  //
  // login
  //
  const login = async (email: string, password: string) => {
    const res = await loginApi({ email, password });

    const token = res.data.accessToken;
    localStorage.setItem("accessToken", token);

    const decoded = jwtDecode<JwtPayload>(token);
    setUser(decoded);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
