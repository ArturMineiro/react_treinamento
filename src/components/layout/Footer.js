
//import { IconName } from "react-icons/ai";
import {FaBeer, FaInstagram } from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
return<footer>
    <ul className={styles.social_list}> 
        <li>    <FaBeer /> </li>
        <li>    <FaFacebook /> </li>
        <li>    <FaInstagram/> </li>

    </ul>
    </footer>
}

export default Footer