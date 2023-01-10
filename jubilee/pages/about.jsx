import styles from '../styles/About.module.css';
import Navbar from '../components/Navbar/Navbar';

function About() {
    return (
        <div className={styles.about} >
            <Navbar />
            <div>
                <p><br/><br/><br/><br/><br/><br/>Welcome to JUBILEE., where we specialize in creating extraordinary events that leave a lasting impression. As a full-service event planning company, we offer a wide range of services to meet all of your event needs. Our team of experienced professionals has a diverse range of skills and expertise, ensuring that no detail is overlooked. From corporate events and conferences to weddings and social gatherings, we have the knowledge and resources to make your event a success.

We pride ourselves on our ability to bring your vision to life, no matter the occasion. Whether you're looking for a lavish wedding, a corporate gala, or a intimate social gathering, we have the expertise and resources to make it happen. Our services include venue selection, decor, catering, entertainment, and more. We take the stress out of event planning and help you create a truly unforgettable experience.

At JUBILEE., customer satisfaction is our top priority. We work closely with our clients to understand their unique needs and preferences, and we strive to exceed their expectations every step of the way. If you're ready to start planning your dream event, we're here to help. Contact us today to get started!</p>
            </div>
        </div>
    )
}

export default About;