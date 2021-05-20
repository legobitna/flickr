import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ClipLoader } from "react-spinners";
import { Container, Alert } from "react-bootstrap";
import SearchForm from "./components/SearchForm";
import DataList from "./components/DataList";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "./redux/action/action";
function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const errorMsg = useSelector((state) => state.errorMsg);
  useEffect(() => {
    dispatch(actions.getData());
  }, []);
  return (
    <div className="text-center">
      <h1>Search</h1>
      <Container>
        <SearchForm />
        {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
        {loading ? (
          <ClipLoader color="#f86c6b" size={150} loading={loading} />
        ) : (
          <DataList />
        )}
      </Container>
    </div>
  );
}

export default App;
