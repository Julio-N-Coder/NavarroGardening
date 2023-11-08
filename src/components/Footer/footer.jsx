import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <nav className={styles.navbar}>
        <Link className='link' href='/'>Home</Link>
        <Link className='link' href='/about'>About</Link>
        <Link className='link' href='/contact-me'>Contact Me</Link>
      </nav>  
    </div>
  )
}
