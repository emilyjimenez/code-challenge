import "./home.css"
import headerImg from "../assets/headerImg.jpeg"

export default function Home() {
    return (
    <div className="home">
        <div className="header">
            <div className="header-title">
                <span className="title-big"><h1>A Matter Supply Blog</h1></span>
            </div>
            <img className="header-img" src={headerImg} alt="tumble weed header"/>
        </div>
    </div>
    )
}
