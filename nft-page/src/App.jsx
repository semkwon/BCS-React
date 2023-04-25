import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-red-100">
        <Routes>
          <Route path="/" />
          <Route path=":tokenId" />
        </Routes>
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
