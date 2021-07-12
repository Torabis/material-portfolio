import './topbar.scss'
import { Person, Mail } from "@material-ui/icons";
export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && 'active')}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro"  className='logo'> TOBY TORABI</a>
                    <div className="itemContainer">
                        <Person className='icon'/>
                        <span>+1 949 405 6663</span>
                        <div className="itemContainer">
                        <Mail className='icon'/>
                        <span>toby.torabi@outlook.com</span>
                    </div>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span classNamene= "line1"></span>
                        <span classNamene= "line2"></span>
                        <span classNamene= "line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
