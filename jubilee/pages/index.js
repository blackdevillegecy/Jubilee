import Gallery from "../components/Gallery/Gallery";
import Navbar from "../components/Navbar/Navbar"
import Services from "../components/Services/Services";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <>
    <div className={styles.home}>
    </div>
    <Navbar />
    <div className={styles.home_elements}>
      <div className={styles.heading}>25TH KARAT.</div>
      <div className={styles.heading2}>Turn your event into an experience</div> 
      <p className={styles.para}>Are you overwhelmed by the thought of planning your next big event? Let us take the stress off your shoulders and help you create a seamless, unforgettable experience. We pride ourselves on our ability to bring your vision to life and deliver a truly memorable event for you and your guests.</p>
      <div className={styles.button}>BOOK NOW!</div>
    </div>
    <Services />
    <br /><br />
    <Gallery />
    </>
  )
}

export default Home;
