import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './MobileHeader.module.scss'

const MobileHeader: FC = () => {
  return (
    <header className={styles.header}>
      <button className={styles.menuButton}>
        <span className={styles.menuIcon}></span>
      </button>
      
      <Link href="/" className={styles.logo}>
        <Image 
          src="/globe.svg" 
          alt="SpaceFreelance" 
          width={150} 
          height={24} 
        />
      </Link>
      
      <Link href="/profile" className={styles.profileLink}>
        <Image 
          src="/profile-icon.svg" 
          alt="Profile" 
          width={24} 
          height={24}
        />
      </Link>
    </header>
  )
}

export default MobileHeader 