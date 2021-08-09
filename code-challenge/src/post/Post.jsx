import "./post.css";
import PostImg from "../assets/post_img.jpeg";

export default function Post() {
    return (
        <div className="post">
          <img className="post-image" src={PostImg} alt="cowboy hat" />  
          <div className="post-info">
            <span className="post-title">Lorem Ipsum</span>
            <div className="post-cats">
            <span className="post-cat">Boots</span>
            <span className="post-cat">Horses</span>
            </div>
            <hr/>
            <span className="post-date">1 hour ago</span>
            <p className="post-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odit, corporis possimus earum soluta eum, numquam quo saepe officiis sit similique asperiores temporibus eos doloremque vitae fuga mollitia eveniet doloribus.</p>
          </div>
        </div>
    )
}
