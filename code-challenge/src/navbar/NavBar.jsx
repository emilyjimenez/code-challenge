import "./navbar.css";
import logo from "../assets/boots_logo.png"

export default function NavBar() {
    return (
        <div className="nav">
            <div className="nav-left">
            <p className="logo-item">
            <img className="logo-image" src={logo} alt="boots logo"/>
            Digital Desperado
            </p>
            </div>
            <div className="nav-center">
            <ul className="nav-list">
            <li className="list-item">Home</li>
            <li className="list-item">About</li>
            <li className="list-item">About</li>
            </ul>
            </div>
            <div className="nav-right">
            <i className="nav-icon fab fa-linkedin"></i>
            <i className="nav-icon fab fa-github-square"></i>
            </div>
        </div>
    )
}
