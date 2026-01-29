import "./App.css";
import Favorite from "./pages/Favorites";
import HomePage from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import { DashboardContext } from "./useContext/Context";
import { useState } from "react";

export interface User {
  name: string;
  email: string;
}

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
  
  // React-router tutorial
  // return (
  //   <div>
  //     <Navbar />
  //     <main className="container mt-4">
  //       <Routes>
  //         <Route path="/" element={<HomePage />} />
  //         <Route path="/favorites" element={<Favorite />} />
  //       </Routes>
  //     </main>
  //   </div>
  // );


  // React-context tutorial
  const [user, setUser] = useState<User>({
    name: "John Doe",
    email: "john.doe@example.com"
  });

  return (
    // using a context provider to provide the user object to the Dashboard component and all of its children components
    <DashboardContext.Provider value={user}>
      <Dashboard />
    </DashboardContext.Provider>
  );
};

export default App;
