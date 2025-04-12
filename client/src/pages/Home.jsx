import React, { useEffect } from "react";
import { GetCurrentUser } from "../api/user";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();

  const fetchCurrentUser = async () => {
    const data = await GetCurrentUser();
    if (data.success) {
      setUser(data.user);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else fetchCurrentUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <>
      <div>Home</div>
      {user && <div>Welcome {user?.name}</div>}

      <Link to="/login" onClick={handleLogout}>
        Logout
      </Link>
    </>
  );
};

export default Home;
