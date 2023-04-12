import MainComponent from '@/components/shared/MainComponent'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Online Game Stores</title>
        <meta name="description" content="FullStack Rails and React online game store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <MainComponent>
        <button onClick={() => router.push('/Auth/Login')}>Login</button>
      </MainComponent>
    </>
  )
}
