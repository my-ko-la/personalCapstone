import HomePage from "./pages/HomePage";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
