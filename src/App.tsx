import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";

import { AppProvider } from "./context";
import NotFoundPage from "./components/NotFoundPage";
import Layout from "./components/Layout";

function App() {
  return (
    <AppProvider>
      <Box sx={{ width: "100vw", height: "100vh" }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/bills" element={<Layout />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </AppProvider>
  );
}

export default App;
