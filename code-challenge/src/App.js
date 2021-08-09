import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";
import Posts from "./components/posts/Posts";
import Post from "./components/post/Post";

function App() {
  return (
    <div className="App">
   <NavBar/>
   <Home/>
   <Posts/>
   <Post/>
    </div>
  );
}

export default App;
