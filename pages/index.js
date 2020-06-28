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
          <a>Welcome to Thomas Hinchliff's personal website</a>
        </h1>

      </main>

      <footer>
        A footer
      </footer>    
    </div>
  )
}
