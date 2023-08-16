import { useNavigate } from "react-router-dom";

const LogOut = () => {
    const navigate = useNavigate();

    const logout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      
      navigate("/");
    };
  
  return (
    <div>
        <a href="/" onClick={logout}>LogOut</a>
    </div>
  )
}

export default LogOut