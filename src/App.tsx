import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components /Header/Header";
import {Route, Routes} from "react-router-dom";
import Posts from "./container/Posts/Posts";
import Add from "./container/Add/Add";

function App() {

  return (
    <>
      <Header/>
      <main className={"container mt-5"}>
        <Routes>
          <Route path={"/"} element={(<Posts/>)}/>
          <Route path={"/new-post"} element={(<Add/>)}/>
          <Route path={"/about"} element={("About")}/>
          <Route path={"/contacts"} element={("Contacts")}/>
          <Route path={"*"} element={"Not found"}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
