import { useEffect, useState } from "react";
import { getUsername } from "../services/auth";

export const useLogin = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/";
    } else {
      setUsername(getUsername(token));
    }
  }, []);

  return username;
};
