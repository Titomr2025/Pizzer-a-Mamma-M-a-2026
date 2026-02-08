import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [email, setEmail] = useState(() => localStorage.getItem("email"));
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedEmail = localStorage.getItem("email");
    if (storedToken !== token) setToken(storedToken);
    if (storedEmail !== email) setEmail(storedEmail);
  });

  const login = async (emailInput, passwordInput) => {
    setError(null);
    try {
      const res = await fetch("http://localhost:5002/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput, password: passwordInput }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error de login");
      setToken(data.token);
      setEmail(data.email);
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
    } catch (err) {
      setError(err.message);
    }
  };

  const register = async (emailInput, passwordInput) => {
    setError(null);
    try {
      const res = await fetch("http://localhost:5002/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput, password: passwordInput }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error de registro");
      setToken(data.token);
      setEmail(data.email);
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
    } catch (err) {
      setError(err.message);
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
    setError(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  const getProfile = async () => {
    setError(null);
    try {
      const res = await fetch("http://localhost:5002/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error al obtener perfil");
      return data;
    } catch (err) {
      setError(err.message);
      return null;
    }
  };

  return (
    <UserContext.Provider
      value={{ token, email, error, login, register, logout, getProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};
