import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={`${styles.introduction} ${styles.center} ${styles.textSize}`}>
        <h2 className={styles.title}>Welcome to Navarro Gardening&apos;s Website, Your Local Landscaping Experts!</h2>
        <article>We specialize in creating beautiful, sustainable outdoor spaces. With over 12 years of experience in the SLO County area, we&apos;re committed to delivering top-quality landscaping services tailored to your needs. Want to contact us quickly, just click here --&gt; <Link className='link' href='/contact-me'>Contact Me</Link></article>
      </section>
    </main>
  )
}
