import "./posts.css";
import Post from "../post/Post";

export default function Posts() {
    return (
        <div className="posts">
        <h3>Posts</h3>
        <Post />
        <Post />
        <Post />
        <Post />
        </div>
    )
}
