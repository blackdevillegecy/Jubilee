import Navbar from '../components/Navbar/Navbar';
import styles from '../styles/CTC.module.css'

function CTC() { // copyright, terms and conditions
    return (
        <div className={styles.ctc} >
            <Navbar />
            <div className={styles.ctc_content}>
                <div className={styles.ctc_content_para}>
                    <div className={styles.para_head}>Terms and Conditions :</div>
                    <div className={styles.para_content}>These terms and conditions (the &apos;Terms and Conditions&apos;) govern the use of link 25thkarat.com 
                    (the &apos;Site&apos;). This Site is owned and operated by 25th Karat. This Site is an intermediate for event organising business. By using 
                    this Site, you indicate that you have read and understand these Terms and Conditions and agree to abide by them at all times.</div>
                    <div className={styles.para_points}>
                        <div className={styles.para_point_head}>1.  Intellectual Property</div>
                        <div className={styles.para_point_content}>All content published and made available on our Site is the property of 25th Karat and the Site's creators. 
                        This includes, but is not limited to images, text, logos, documents, downloadable files and anything that contributes to the composition of our Site.</div>
                    </div>
                    <div className={styles.para_points}>
                        <div className={styles.para_point_head}>2.  Limitation of Liability</div>
                        <div className={styles.para_point_content}>25th Karat and our directors, officers, agents, employees, subsidiaries, and affiliates will not be liable for any 
                        actions, claims, losses, damages, liabilities and expenses including legal fees from your use of the Site.</div>
                    </div>
                    <div className={styles.para_points}>
                        <div className={styles.para_point_head}>3.  Indemnity</div>
                        <div className={styles.para_point_content}>Except where prohibited by law, by using this Site you indemnify and hold harmless 25th Karat and our 
                        directors, officers, agents, employees, subsidiaries, and affiliates from any actions, claims, losses, damages, liabilities and expenses including 
                        legal fees arising out of your use of our Site or your violation of these Terms and Conditions.</div>
                    </div>
                    <div className={styles.para_points}>
                        <div className={styles.para_point_head}>4.  Applicable Law</div>
                        <div className={styles.para_point_content}>These Terms and Conditions are governed by the laws of the country of India</div>
                    </div>
                    <div className={styles.para_points}>
                        <div className={styles.para_point_head}>5.  Severability</div>
                        <div className={styles.para_point_content}>If at any time any of the provisions set forth in these Terms and Conditions are found to be inconsistent or invalid under applicable laws, 
                        those provisions will be deemed void and will be removed from these Terms and Conditions. All other provisions will not be affected by the removal and the rest of these 
                        Terms and Conditions will still be considered valid.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTC;