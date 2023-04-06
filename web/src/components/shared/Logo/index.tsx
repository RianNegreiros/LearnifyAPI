import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href='/'>
        <Image src="/assets/logo.png" alt='Store Logo' width={220} height={50} />
    </Link>
  )
}