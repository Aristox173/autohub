import Home from "./views/Home";
import Login from "./views/Login";
import List from "./views/List";
import Single from "./views/Single";
import New from "./views/New";
import Register from "./views/Register";
import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./controllers/context/AuthContext";
import { mechanicInputs, productInputs, supplierInputs } from "./formSource";
import {
  supplierColumns,
  mechanicColumns,
  productColumns,
} from "./datatablesource";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route path="suppliers">
              <Route
                index
                element={
                  <RequireAuth>
                    <List columns={supplierColumns} title="SUPPLIERS" />
                  </RequireAuth>
                }
              />
              <Route
                path=":supplierId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New
                      inputs={supplierInputs}
                      title="Add New Supplier"
                      dbModel="suppliers"
                    />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="mechanics">
              <Route
                index
                element={
                  <RequireAuth>
                    <List columns={mechanicColumns} title="MECHANICS" />
                  </RequireAuth>
                }
              />
              <Route
                path=":mechanicId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New
                      inputs={mechanicInputs}
                      title="Add New Mechanic"
                      dbModel="mechanics"
                    />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="products">
              <Route
                index
                element={
                  <RequireAuth>
                    <List columns={productColumns} title="PRODUCTS" />
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New
                      inputs={productInputs}
                      title="Add New Product"
                      dbModel="products"
                    />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
