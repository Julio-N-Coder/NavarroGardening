import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.titleLogo}>
        <h1 className={styles.title}>Navarro Gardening</h1>
        <Image className={styles.logo} src='/navarro-gardening-logo-croped-small.jpg' width={100} height={100} alt='Navarro Gardening Logo' />
        {/* <label className={styles.logo}>Place logo here</label> */}
      </div>
      <nav className={styles.navbar}>
        <Link className='link' href='/'>Home</Link>
        <Link className='link' href='/about'>About</Link>
        <Link className='link' href='/contact-me'>Contact Me</Link>
      </nav>  
    </header>
  )
}
