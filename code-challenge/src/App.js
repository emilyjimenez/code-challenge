import NavBar from "./navbar/NavBar";
import Home from "./pages/Home";
import Posts from "./posts/Posts";
import Post from "./post/Post";

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
