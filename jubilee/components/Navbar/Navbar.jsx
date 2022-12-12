import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <div className={styles.nav}>
            <div style={{display: 'flex', width: '100%', justifyContent: 'flex-end', gap: '3.5vw', marginRight: '3vw'}}>
                <Link href="/about"><div className={styles.nav_btns}>About</div></Link>
                <Link href="/contact"><div className={styles.nav_btns}>Contact</div></Link>
                <Link href="/"><div className={styles.nav_btns}>Services</div></Link>
                <Link href="/ctc"><div className={styles.nav_btns}>Terms and Conditions</div></Link>
            </div>
        </div>
    )
}

export default Navbar;