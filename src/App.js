import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ComicsStories from "./Components/ComicsStories";
import ArtConcepts from "./Components/ArtConcepts";
import About from "./Components/About";
import Commissions from "./Components/Commissions";
import { Box } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Box sx={{ margin: "20px 50px" }}>
        <Routes>
          <Route path="/" element={<Box>Sumbal Nayyab</Box>} />
          <Route path="/comics&stories" element={<ComicsStories />} />
          <Route path="/art&concepts" element={<ArtConcepts />} />
          <Route path="/commissions" element={<Commissions />} />
          <Route path="/about" element={<About />} />
          <Route
            path="*"
            element={
              <Box style={{ textAlign: "center", fontWeight: "bold" }}>
                Page Not Found!
              </Box>
            }
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
