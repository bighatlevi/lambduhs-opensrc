import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {

  return (
    <div id="body" className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Lamb Duhs</title>
        <link rel="icon" type="image/png" href="/images/logo.png" />

        <meta property="og:title" content="Lamb Duhs" key="ogtitle" />
        <meta property="og:description" content="A collection of digital lambs wandering the grasslands of the Ethereum blockchain!" key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://lambduhs.com/" key="ogurl"/>
        <meta property="og:image" content="https://lambduhs.com/images/logo.png" key="ogimage"/>
        <meta property="og:site_name" content="https://lambduhs.com/" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="lambduhs.com" key="twdomain" />
        <meta property="twitter:url" content="https://lambduhs.com/" key="twurl" />
        <meta name="twitter:title" content="Lamb Duhs NFT" key="twtitle" />
        <meta name="twitter:description" content="A collection of digital lambs wandering the grasslands of the Ethereum blockchain!" key="twdesc" />
        <meta name="twitter:image" content="https://lambduhs.com/images/logo.png" key="twimage" />
      </Head>


      <div >
          <div className="flex items-center justify-between w-full border-b-2	pb-0">
          <Link href="/"><a className=""><Image src="/images/logo.png" width={64} height={64} alt="" className="logo-image" /></a></Link>
            <p>&nbsp;&nbsp;</p>
            <nav className="flex flex-wrap flex-row justify-around Candycane">
              <Link href="#about"><a className="text-4xl text-white hover:text-black m-6" >About</a></Link>
              <Link href="#rarity"><a className="text-4xl text-white hover:text-black m-6">Rarity</a></Link>
              <Link href="#roadmap"><a className="text-4xl text-white hover:text-black m-6">Roadmap</a></Link>
              <Link href="#team"><a className="text-4xl text-white hover:text-black m-6">Team</a></Link>
            </nav>
            <nav className="flex flex-wrap flex-row justify-around Candycane">
              <Link href="https://twitter.com/LambDuhsNFT"><a className="m-6"><Image src="/images/tlogo.png" width={48} height={48} alt="" className="logo-image" /></a></Link>
              <Link href="https://discord.gg/4Z5wvcN54E"><a className="m-6"><Image src="/images/dlogo.png" width={48} height={48} alt="" className="logo-image" /></a></Link>
            </nav>
          </div>
        </div>


        <div className="md:w-2/3 w-4/5 " id="about">
          <div className="mt-6 border-b-2 py-6">
            <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                  <div className="lg:w-2/5 w-full">
                    <h1 className="text-5xl Daniel text-center text-purp">Lamb&nbsp;Duhs</h1>
                    <p className="text-2xl text-white my-6  montserrat"> A collection of cute and silly digital lambs wandering the grasslands of the Ethereum blockchain!<br/><br/>
                      Our lambs have been generated from 350K+ possible trait combinations with an abundant variety of faces, wool colors, and outfit accessories.<br/><br/>
                      We are officially SOLD OUT! Hit the button below to go to our OpenSea!<br/><br/><br/><br/>
                    </p>
                    <p className="text-2xl text-white my-6  montserrat">
                      <strong>LAUNCH DATE:</strong> August 21<br/>‍
                      <span className="text-white text-2xl montserrat"><strong>TOTAL SUPPLY: 8,500</strong> lambs<br/>
                      <strong>MINT PRICE: 0.022 ETH </strong>each</span>
                    </p>
                    <Link href="https://opensea.io/collection/lambduhs"><a target="_blank" className="mt-4 Candycane text-6xl border-6 bg-purp text-white hover:text-black p-2" id="rcorners">Check&nbsp;out&nbsp;OpenSea!</a></Link><br/><br/>
                  </div>
                  <Image className="lg:w-1/2 w-3/4" id="rcorners" src="/images/lambgif.gif" width={700} height={700}/>
            </div>
          <br/>
        </div>
      </div>
    </div>
  )
}