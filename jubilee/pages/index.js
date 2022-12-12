import Gallery from "../components/Gallery/Gallery";
import Navbar from "../components/Navbar/Navbar";
import Services from "../components/Services/Services";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <>
    <div className={styles.home}>
    </div>
    <Navbar />
    <div className={styles.home_elements}>
      <div className={styles.heading}>Magic is Waiting for You</div>
      <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas enim lacus, lacinia ornare quam id, vehicula ornare augue. Vestibulum ante ipsum primis vehicula ornare augue. Vestibulum ante ipsum</p>
      <div className={styles.button}>LOREM IPSUM</div>
    </div>
    <Services />
    {/* <Gallery /> */}
    </>
  )
}

export default Home;
