import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components /Header/Header";
import {Route, Routes} from "react-router-dom";
import Posts from "./container/Posts/Posts";
import NewPost from "./container/NewPost/NewPost";
import Post from "./container/Post/Post";
import About from "./container/About/About";
import Contacts from "./container/Contacts/Contacts";

function App() {

  return (
    <>
      <Header/>
      <main className={"container mt-5"}>
        <Routes>
          <Route path={"/"} element={(<Posts/>)}/>
          <Route path={"/new-post"} element={(<NewPost/>)}/>
          <Route path={"/about"} element={(<About/>)}/>
          <Route path={"/contacts"} element={(<Contacts/> )}/>
          <Route path={"/posts/:id"} element={(<Post/>)}/>
          <Route path={"/posts/:id/edit"} element={(<NewPost/>)}/>
          <Route path={"*"} element={"Not found"}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
