import Navbar from '../components/Navbar/Navbar';
import styles from '../styles/Contact.module.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Contact() {
    return (
        <div className={styles.contact} >
            <Navbar />
            <div className={styles.contact_container}>
                <div className={styles.contact_heading}>Placing Dreams, Because Every Dream Matters</div>
                <div className={styles.contact_details}>
                    <div className={styles.place}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex amet nam ipsam itaque soluta vero perferendis illum qui tenetur dolorem!</div>
                    <div className={styles.mobile_number}>+91 85275 13831</div>
                    <div className={styles.social_media}>
                        <div className={styles.logos}><WhatsAppIcon style={{fontSize: "45px", color: 'lightgreen'}} /></div>
                        <div className={styles.logos}><InstagramIcon style={{fontSize: "45px", color: 'magenta'}} /></div>
                        <div className={styles.logos}><FacebookIcon style={{fontSize: "45px", color: '#1877f2'}} /></div>
                        <div className={styles.logos}><YouTubeIcon style={{fontSize: "45px", color: 'red'}} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;