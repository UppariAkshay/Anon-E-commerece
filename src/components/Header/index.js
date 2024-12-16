import './index.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoBagRemoveOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";


const Header = () => {
    return (
        <>
        <nav className='headerNAV'>
            <ul className='socialAppsUL'>
                <li className='socialAppLI'><FaFacebook size={20} /></li>
                <li className='socialAppLI'><FaTwitter  size={20}/></li>
                <li className='socialAppLI'><FaInstagram size={20} /></li>
                <li className='socialAppLI'><FaLinkedin  size={20}/></li>
            </ul>
            <p>Free Shipping This Week Order Over - $55</p>
            <div>
                <select>
                    <option>USD $</option>
                    <option>EUR E</option>
                </select>
                <select>
                    <option>ENGLISH</option>
                    <option>ESPANOL</option>
                    <option>FRANCAIS</option>
                </select>
            </div>
        </nav>
        <div className='header2DIV'>
            <h1>Anon</h1>
            <div className='searchElementDIV'>
                <input className='searchElINPUT' type='search' placeholder='Enter Your Product name...' />
                <button className='searchIconBUTTON'><CiSearch size={30} /></button>
            </div>
            
            <ul className='profileLikeBagContainerUL'>
                <li><FaRegUser size={40} /></li>
                <li><FaRegHeart size={40} /></li>
                <li><IoBagRemoveOutline size={40} /></li>
            </ul>
        </div>
        </>
    )
}

export default Header