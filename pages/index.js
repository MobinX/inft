import Head from 'next/head'
import Image from 'next/image'

const Card =()=>{
  return(
    <div>
      {/* images */}
      <div></div>
      {/* text */}
      <div>

      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="col min-h-screen min-w-screen bg-blue-900 px-5 py-4">
      <Head>
        <title>INFT: The exclusive way to NFTs</title>
        <meta name="description" content="nfts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* navbar */}
      <div>
        {/* icon0*/}
        <div></div>
        {/* actions */}
        <div>

        </div>
      </div>

      {/* header */}
      <div>
        {/* text */}
        <div></div>
        {/* images */}
        <div></div>
      </div>

      {/* features */}
     <div>
       {/* cards */}
       <Card />
     </div>

     


    </div>
  )
}
