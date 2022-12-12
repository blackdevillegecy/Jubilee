import styles from '../styles/About.module.css';
import Navbar from '../components/Navbar/Navbar';

function About() {
    return (
        <div className={styles.about} >
            <Navbar />
        </div>
    )
}

export default About;