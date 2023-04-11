import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.css'

export default function Logo() {
  return (
    <Link href="/">
        <a className={styles.logo}>
            <Image src="/assets/logo.png" alt="Logo" width={220} height={40} />
        </a>
    </Link>
  )
}