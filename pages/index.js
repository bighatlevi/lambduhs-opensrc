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


                <div id="rarity" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                <div className=""><Image src="/images/infomercialpt4.png" alt="" width={450} height={300} className="feature-image"/></div>
                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 w-4/5 py-6">
                    <h2 className="text-6xl text-center Candycane text-purp">How is rarity determined?</h2>
                    <p className="text-2xl text-white my-6  montserrat"> Each head and body accessory is worth 1-4 points based on how unique they are. For example, more common items such as a plain shirt or baseball cap are worth less points than more stylish items like a top hat or astronaut suit.
                    </p>
                    <p className="text-2xl text-white my-6  montserrat"> These accessory points are then added up and result in a total value between 2-8 points. This value determines a lamb&apos;s rarity tier, with each tier being associated with its own color. As a result, lamb rarity and accessory points can be easily recognized by looking at the background colors!
                    </p>
                  </div>
                  <Image src="/images/cards.png" alt="" width={1328} height={1306} className="feature-image"/>
                </div>


              <div id="roadmap" className="">
                <div className="flex items-center justify-between w-full border-b-2	pb-0"></div><br/>
                <h2 className="text-6xl text-center Candycane text-purp my-4">The launch plan</h2>
                <ul className="">
                  <li className="line-through text-2xl text-white my-6  montserrat"><span className="font-bold"> 25% sold - Special Raffle:</span> The first signature lamb will be revealed and raffled off in an exclusive limited time giveaway!</li>
                  <li className="line-through text-2xl text-white my-6  montserrat"><span className="font-bold"> 50% sold - Art Livestream:</span> Watch our artist Roxilla do a live illustration of the second signature lamb and participate in a Q&A with the devs!</li>
                  <li className="text-2xl text-white my-6  montserrat"><span className="font-bold"> 75% sold - Treasure Hunt:</span> The third signature lamb will be revealed and awaits the winner of our puzzle riddled game, will you lambs be able to solve for x?</li>
                  <li className="text-2xl text-white my-6  montserrat"><span className="font-bold"> 100% sold - Open Source/Mystery Annoucement:</span> When the entire flock is accounted for, the code becomes public and we begin working on our supplemental video walkthroughs as well as our secret follow-up project!</li>
                </ul><br/>
                <Image src="/images/roadmap.png" alt="" width={2172} height={1220}/>
                <h2 className="text-6xl text-center Candycane text-purp my-4">On the horizon</h2>
                <ul className="">
                  <li className="text-2xl text-white my-6  montserrat"><span className="font-bold"> Charity Auction:</span> A signature lamb will be revealed and auctioned off with the proceeds being sent to a charitable organization of the community&apos;s choosing!</li>
                  <li className="text-2xl text-white my-6  montserrat"><span className="font-bold"> Original Airdrops:</span> Get rewarded for owning a lamb and expect exclusive NFT drops applicable to holders only!</li>
                  <li className="text-2xl text-white my-6  montserrat"><span className="font-bold"> Community Wallet:</span> Isn&apos;t LambDAO catchy? As this would be a community driven process, join our Discord and get involved with the team to share how you might want to see this implemented.</li>
                  <li className="text-2xl text-white my-6  montserrat"><span className="font-bold"> Merch Store:</span> Wanna rep your lamb? So do we! We&apos;ll keep you posted after we work out the logistics.</li>
                  <p className="text-2xl text-white text-center montserrat ">And of course, numerous additional events and project collaborations!</p>
                <div className="flex flex-wrap justify-around item-center"><Image src="/images/cool.png" width={150} height={150} alt="" className="logo-image" /></div><br/>
                <p className="text-2xl text-white text-center montserrat ">Our horizon roadmap is a work in progress and thus subject to change, stay tuned while we build!</p>
                </ul>
              </div>


              <div id="team" className="my-6">
                <div className="flex items-center justify-between w-full border-b-2	pb-0"></div><br/>
                <h2 className="text-6xl text-center Candycane text-purp my-4">Meet your Shepherds</h2>
                <p className="text-2xl text-center text-white my-6 montserrat"> We are a small team of college students specializing in the art of trial and error.<br/><br/> Feel free to reach out to us! We don&apos;t bite, and last we checked, the lambs don&apos;t either!</p>
                <br/><br/><br/><br/>
                <div className="flex justify-around flex-wrap">
                  
                  <div className="flex flex-col  my-6" style={{width:"200px"}}>
                    <div className="cards-image-mask"><Image src="/images/levi.png" width={360} height={360} alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-6xl text-center Candycane text-purp">Levi</h3>
                    <Link href="https://twitter.com/bighatlevi"><a className="text-center text-2xl text-center Daniel text-white hover:text-black">@bighatlevi</a></Link>
                  </div>

                  <div className="flex flex-col  my-6" style={{width:"200px"}}>
                    <div className="cards-image-mask"><Image src="/images/beef.png" width={360} height={360} alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-6xl text-center Candycane text-purp">Trevor</h3>
                    <Link href="https://twitter.com/beefJenson"><a className="text-center text-2xl text-center Daniel text-white hover:text-black">@beefJenson</a></Link>
                  </div>

                  <div className="flex flex-col  my-6" style={{width:"200px"}}>
                    <div className="cards-image-mask"><Image src="/images/roxilla.png" width={360} height={360} alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-6xl text-center Candycane text-purp">Roxilla</h3>
                    <Link href="https://twitter.com/roxillaaaa"><a className="text-center text-2xl text-center Daniel text-white hover:text-black">@roxillaaaa</a></Link>
                  </div>

                  <div className="flex flex-col  my-6" style={{width:"200px"}}>
                    <div className="cards-image-mask"><Image src="/images/fenton.png" width={360} height={360} alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-6xl text-center Candycane text-purp">Fenton</h3>
                    <Link href="https://twitter.com/__fenton"><a className="text-center text-2xl text-center Daniel text-white hover:text-black">@_fenton</a></Link>
                  </div>

                  <div className="flex flex-col  my-6" style={{width:"200px"}}>
                    <div className="cards-image-mask"><Image src="/images/bjorn.png" width={360} height={360} alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-6xl text-center Candycane text-purp">Bjorn</h3>
                    <Link href="https://twitter.com/dcwade01"><a className="text-center text-2xl text-center Daniel text-white hover:text-black">@dcwade01</a></Link>
                  </div>

                </div>
              </div>
              <br/><br/><br/><br/><br/>
              <p className="text-xl text-center text-white my-6  montserrat">Lamb Duhs 2021</p>

        </div>   
    </div>   
  )
}