import "./App.css";
import Favorite from "./pages/Favorites";
import HomePage from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const App: React.FC = () => {

  // local storage to persist count across components and reloads
  // const [count, setCount] = useState(() => {
  //   const item = getItem("count");
  //   return (item as number) || 0;
  // })

  // useEffect(() => {
  //   setItem("count", count);
  // }, [count]);

  // removeItem("count");
  
  return (
    <div>
      <Navbar />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
