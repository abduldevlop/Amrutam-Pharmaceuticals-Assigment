import { Route, Routes } from "react-router-dom";
import { NavBar } from "./components";
import { FindDoctors, Profile } from "./pages";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/doctors" element={<FindDoctors />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
