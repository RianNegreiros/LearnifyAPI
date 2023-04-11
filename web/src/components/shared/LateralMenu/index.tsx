import React from 'react'
import styles from './styles.module.css'
import Logo from '../Logo'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignal, faUser, faGamepad, faCheckSquare, faLaptop, faTicketAlt, faDollarSign, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import { useRouter } from 'next/router'

export default function LateralMenu() {
  const router = useRouter()

  return (
    <div className={styles.background}>
      <Logo />

      <div className={styles.list}>
        <Link href="/Admin">
          <a className={`${router.pathname === '/Admin' ? styles.active : ''}`}>
            <FontAwesomeIcon
              icon={faSignal}
              color="var(--color-gray-light)"
              className="mr-3"
            />
            Home
            <hr />
          </a>
        </Link>

        <Link href="/Admin/Users/List">
          <a className={`${router.pathname === '/Admin/Users/List' ? styles.active : ''}`}>
            <FontAwesomeIcon icon={faUser} color="var(--color-gray-light)" className="mr-3" />
            Users
            <hr />
          </a>
        </Link>

        <Link href="/Admin/Products/List">
          <a className={`${router.pathname === '/Admin/Products/List' ? styles.active : ''}`}>
            <FontAwesomeIcon icon={faGamepad} color="var(--color-gray-light)" className="mr-3" />
            Products
            <hr />
          </a>
        </Link>

        <Link href="/Admin/Categories/List">
          <a className={`${router.pathname === '/Admin/Categories/List' ? styles.active : ''}`}>
            <FontAwesomeIcon icon={faCheckSquare} color="var(--color-gray-light)" className="mr-3" />
            Categories
            <hr />
          </a>
        </Link>

        <Link href="/Admin/SystemRequirements/List">
          <a className={`${router.pathname === '/Admin/SystemRequirements/List' ? styles.active : ''}`}>
            <FontAwesomeIcon icon={faLaptop} color="var(--color-gray-light)" className="mr-3" />
            System Requirements
            <hr />
          </a>
        </Link>

        <Link href="/Admin/Coupons/List">
          <a className={`${router.pathname === '/Admin/Coupons/List' ? styles.active : ''}`}>
            <FontAwesomeIcon icon={faTicketAlt} color="var(--color-gray-light)" className="mr-3" />
            Coupons
            <hr />
          </a>
        </Link>

        <Link href="/Admin/#">
          <a>
            <FontAwesomeIcon icon={faDollarSign} color="var(--color-gray-light)" className="mr-3" />
            Finance
            <hr />
          </a>
        </Link>

        <Link href="/Admin/#">
          <a>
            <FontAwesomeIcon icon={faSignOutAlt} color="var(--color-gray-light)" className="mr-3" />
            Logout
            <hr />
          </a>
        </Link>
      </div>
    </div>
  )
}