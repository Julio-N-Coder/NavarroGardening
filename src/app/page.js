import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={`${styles.introduction} ${styles.center} ${styles.textSize}`}>
        <h2 className={styles.title}>Welcome to Navarro Gardening&apos;s Website, Your Local Landscaping Experts!</h2>
        <article>We specialize in creating beautiful, sustainable outdoor spaces. With over 12 years of experience in the SLO County area, we&apos;re committed to delivering top-quality landscaping services tailored to your needs. Want to contact us quickly, just click here --&gt; <Link className='link' href='/contact-me'>Contact Me</Link></article>
      </section>
      {/* Services Section */}
      <section className={`${styles.servicesContainer} ${styles.center} ${styles.textSize}`}>
        <h2 className={styles.title}>Services</h2>
        <article>At Navarro Gardening, we offer a comprehensive range of yard services designed to keep your outdoor spaces looking their best. Our team of experienced professionals is committed to delivering top-quality service and exceptional results. Here&apos;s what we can do for you:</article>
        <div className={styles.services}>
          <article className={styles.service}><span className={styles.bold}>Mowing:</span> Regular mowing is essential for a healthy and attractive lawn. We provide reliable, professional mowing services tailored to your lawn&apos;s specific needs.</article>
          <article className={styles.service}><span className={styles.bold}>Trimming Hedges:</span> Well-trimmed hedges not only look good but also contribute to the overall health of the plants. Our experianced profesional has the skills and equipment to trim your hedges to perfection.</article>
          <article className={styles.service}><span className={styles.bold}>Irrigation:</span> Proper watering is crucial for a thriving yard. We offer irrigation services to ensure your plants get the right amount of water they need to flourish</article>
          <article className={styles.service}><span className={styles.bold}>Clean-ups:</span> Whether it&apos;s spring cleaning, preparing for winter, or maintaining a clean and tidy yard year-round, We can handle it. We&apos;ll remove leaves, branches, and other debris to keep your yard looking its best.</article>
          <article className={styles.service}><span className={styles.bold}>Other Yard Services:</span> We also offer a variety of other yard services. Whether you need help with planting, mulching, fertilizing, or any other yard care tasks, we&apos;ve got you covered.</article>
        </div>
      </section>
      {/* Location and Pricing Section */}
      <section className={`${styles.locationPricing} ${styles.textSize}`}>
        {/* location section */}
        <div className={styles.location}>
          <h2>Service Location</h2>
          <article>We Serve in the North County SLO area. More specifically, anywere around the Atascadero and San Miguel area</article>
        </div>
        {/* Pricing section */}
        <div className={styles.pricing}>
          <h2 className={styles.title}>Pricing</h2>
          <article className={styles.article}>We charge $65 - $80 an hour depending on services</article>
        </div>
      </section>
    </main>
  )
}
