import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Detail from "./pages/detail";
import Header from "./components/Header";
import { useState } from "react";
import MembershipMain from "./pages/membershipMain";

function App() {
  const [account, setAccount] = useState("");

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Header account={account} setAccount={setAccount} />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/membership/:tokenId" element={<Detail />} />
          <Route
            path="/membership"
            element={<MembershipMain account={account} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
