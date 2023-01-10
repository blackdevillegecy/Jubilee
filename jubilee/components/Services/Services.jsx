import styles from './Services.module.css';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import CakeIcon from '@mui/icons-material/Cake';
import CelebrationIcon from '@mui/icons-material/Celebration';
import LiquorIcon from '@mui/icons-material/Liquor';

function Services() {
    return (
        <div className={styles.services}>
            <div className={styles.service}>
                <div className={styles.service_logo}><AutoFixNormalIcon className={styles.main_logo} /></div>
                <div className={styles.service_description}>Magic Show</div>
            </div>
            <div className={styles.service}>
                <div className={styles.service_logo}><CakeIcon className={styles.main_logo} /></div>
                <div className={styles.service_description}>Birthday Parties</div>
            </div>
            <div className={styles.service}>
                <div className={styles.service_logo}><CelebrationIcon className={styles.main_logo} /></div>
                <div className={styles.service_description}>Decoration</div>
            </div>
            <div className={styles.service}>
                <div className={styles.service_logo}><LiquorIcon className={styles.main_logo} /></div>
                <div className={styles.service_description}>Food</div>
            </div>
        </div>
    )
}

export default Services;