import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

export default function About() {
  return (
    <main className={styles.background}>
      {/* Add background image in other branch */}
      {/* <Image className={styles.imgBackground} src='/eco-warrior-princess-TsOeGUwWzWo-unsplash.jpg' layout='fill' alt='Gardening Image' /> */}
      <main className={styles.main}>
        <h1>About Navarro Gardening</h1>
        <article className={styles.text}><span className={styles.textLine}>Welcome to Navarro Gardening, your local landscaping experts. We are an Individual-owned and operated business based in San Miguel. With over 12 years of experience in the landscaping industry, we take pride in providing top-quality services to our community.</span>
        <br />
        <span className={styles.textLine}>Our founder, Cesar, started Navarro Gardening with a simple mission: to create beautiful, sustainable outdoor spaces that enhance our clients&apos; quality of life. Over the years, we have grown into a full-service landscaping company, offering a wide range of services from lawn mowing and hedge trimming to irrigation and yard clean-ups.</span>
        <br />
        <span className={styles.textLine}>At Navarro Gardening, we believe that every outdoor space has the potential to be a sanctuary, a place where you can relax, entertain, and enjoy the beauty of nature. Our experienced professional is dedicated to making this vision a reality for our clients.</span>
        <br />
        <span className={styles.textLine}>We understand that every yard is unique, which is why we tailor our services to meet the specific needs and preferences of each client. Whether you need regular maintenance services or a complete yard makeover, we&apos;re here to help.</span>
        <br />
        <span className={styles.textLine}>Thank you for considering Navarro Gardening for your landscaping needs. We look forward to the opportunity to serve you.</span></article>
      </main>
    </main>
  )
}
