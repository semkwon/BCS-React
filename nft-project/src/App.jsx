import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Detail from "./pages/detail";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [account, setAccount] = useState("");

  return (
    <BrowserRouter>
      <div className="bg-blue-100 min-h-screen">
        <Header account={account} setAccount={setAccount} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:tokenId" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
