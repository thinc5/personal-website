import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>thinc5</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to Tom's personal website!
        </h1>

      </main>  
    </div>
  )
}
