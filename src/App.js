import Home from "./views/Home";
import Login from "./views/Login";
import List from "./views/List";
import Single from "./views/Single";
import New from "./views/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="suppliers">
              <Route index element={<List />} />
              <Route path=":supplierId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="mechanics">
              <Route index element={<List />} />
              <Route path=":mechanicId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
