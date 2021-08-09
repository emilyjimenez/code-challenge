import "./navbar.css";
import {ReactComponent as Logo} from "../assets/boots_logo.svg"

export default function NavBar() {
    return (
        <div className="nav">
            <div className="nav-left">
                <div className="logo">
                    <Logo />
                </div>
                <div className="logo-item">Digital Desperado</div>
            </div>
            <div className="nav-center">
            <ul className="nav-list">
            <li className="list-item">About</li>
            <li className="list-item">Write</li>
            <li className="list-item">Logout</li>
            </ul>
            </div>
            <div className="nav-right">
            <ul className="nav-list">
            <li><i className="nav-icon fab fa-linkedin"></i></li>
            <li><i className="nav-icon fab fa-github-square"></i></li>
            </ul>
            </div>
        </div>
    )
}
