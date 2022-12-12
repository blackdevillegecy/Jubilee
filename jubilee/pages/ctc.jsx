import Navbar from '../components/Navbar/Navbar';
import styles from '../styles/CTC.module.css'

function CTC() { // copyright, terms and conditions
    return (
        <div className={styles.ctc} >
            <Navbar />
        </div>
    )
}

export default CTC;