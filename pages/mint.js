import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Web3 from "web3";
import { useState, useEffect } from 'react';

import {ADDRESS, ABI} from "../config.js"

export default function Mint() {

  // FOR WALLET
  const [signedIn, setSignedIn] = useState(false)

  const [walletAddress, setWalletAddress] = useState(null)

  // FOR MINTING
  const [how_many_lambs, set_how_many_lambs] = useState(1)

  const [lambContract, setLambContract] = useState(null)

  // INFO FROM SMART Contract
  const [totalSupply, setTotalSupply] = useState(0)

  const [saleStarted, setSaleStarted] = useState(false)

  const [lambPrice, setLambPrice] = useState(0)

  useEffect( async() => { 

    signIn()

  }, [])

  async function signIn() {
    if (typeof window.web3 !== 'undefined') {
      // Use existing gateway
      window.web3 = new Web3(window.ethereum);
     
    } else {
      alert("No Ethereum interface injected into browser. Read-only access");
    }

    window.ethereum.enable()
      .then(function (accounts) {
        window.web3.eth.net.getNetworkType()
        
        // Checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
        .then((network) => {console.log(network);if(network != "main"){alert("You are on " + network + " network. Change network to Mainnet to mint!")} });  
        let wallet = accounts[0]
        setWalletAddress(wallet)
        setSignedIn(true)
        callContractData(wallet)
  })

  .catch(function (error) {
  // Handle error. Likely the user rejected the login
  console.error(error)
  })
  }

  async function signOut() {
    setSignedIn(false)
  }

  
  async function callContractData() {
    const lambContract = new window.web3.eth.Contract(ABI, ADDRESS)
    setLambContract(lambContract)

    const salebool = await lambContract.methods.saleIsActive().call() 
    // console.log("saleisActive" , salebool)
    setSaleStarted(salebool)

    const totalSupply = await lambContract.methods.totalSupply().call() 
    setTotalSupply(totalSupply)

    const lambPrice = await lambContract.methods.lambPrice().call() 
    setLambPrice(lambPrice)
  }
  
  async function mintLambs(how_many_lambs) {
    if (lambContract) {
 
      const price = Number(lambPrice)  * how_many_lambs

      //This part estimates the gas amount and creates a small buffer to ensure successful transactions at the cost of higher gas
      const baseGasAmount = await lambContract.methods.mintLambs(how_many_lambs).estimateGas({from: walletAddress, value: price })
      const gasAmount = Math.round(baseGasAmount * 1.33)

      console.log("estimated gas = ",gasAmount)
      console.log({from: walletAddress, value: price})
      
      lambContract.methods
            .mintLambs(how_many_lambs)
            .send({from: walletAddress, value: price, gas: String(gasAmount)})
            .on('transactionHash', function(hash){
              console.log("transactionHash", hash)
            })

    } else {
        console.log("Wallet not connected")
    }
  };


  return (
    <div id="body" className="flex flex-col items-center min-h-screen py-2">
      <Head>
        <title>Lamb Duhs</title>
        <link rel="icon" type="image/png" href="/images/logo.png" />

        <meta property="og:title" content="Lamb Duhs" key="ogtitle" />
        <meta property="og:description" content="A collection of 8,500 digital lambs wandering the grasslands of the Ethereum blockchain!" key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://lambduhs.com/" key="ogurl"/>
        <meta property="og:image" content="https://lambduhs.com/images/logo.png" key="ogimage"/>
        <meta property="og:site_name" content="https://lambduhs.com/" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="lambduhs.com" key="twdomain" />
        <meta property="twitter:url" content="https://lambduhs.com/" key="twurl" />
        <meta name="twitter:title" content="Lamb Duhs NFT" key="twtitle" />
        <meta name="twitter:description" content="A collection of 8,500 digital lambs wandering the grasslands of the Ethereum blockchain!" key="twdesc" />
        <meta name="twitter:image" content="https://lambduhs.com/images/logo.png" key="twimage" />
      </Head>


      <div >
        <div className="flex items-center justify-between w-full border-b-2	pb-0">
            <Link href="/"><a className=""><Image src="/images/logo.png" width={64} height={64} alt="" className="logo-image" /></a></Link>
            <p>&nbsp;&nbsp;</p>
            <nav className="flex flex-wrap flex-row justify-around">
              <Link href="/#about"><a className="text-4xl text-white hover:text-black m-6" >About</a></Link>
              <Link href="/#rarity"><a className="text-4xl text-white hover:text-black m-6">Rarity</a></Link>
              <Link href="/#roadmap"><a className="text-4xl text-white hover:text-black m-6">Roadmap</a></Link>
              <Link href="/#team"><a className="text-4xl text-white hover:text-black m-6">Team</a></Link>
            </nav>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <Link href="https://twitter.com/LambDuhsNFT"><a className=""><Image src="/images/tlogo.png" width={48} height={48} alt="" className="logo-image" /></a></Link>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <Link href="https://discord.gg/4Z5wvcN54E"><a className=""><Image src="/images/dlogo.png" width={48} height={48} alt="" className="logo-image" /></a></Link>
        </div>
            <div className="flex auth my-8 font-bold justify-center items-center vw2">
            {!signedIn ? <button onClick={signIn} className="inline-block border-1 border-black border-opacity-100 text-white no-underline py-2 px-4 mx-4 shadow-lg hover:text-white-100">Connect Wallet with Metamask</button>
            : <button onClick={signOut} className="inline-block border-1 border-black border-opacity-100 text-white no-underline py-2 px-4 mx-4 hover:text-white-100">Wallet Connected: {walletAddress}</button>}
          </div>
      </div>
        <div className="md:w-2/3 w-4/5">
          <div className="mt-6 border-b-1 py-6">
            <div className="flex flex-col items-center">
                <span className="flex  text-6xl text-purp items-center rounded rounded-r-none my-4">Total Lambs Minted:  &emsp; <span className="text-white not-italic font-bold text-8xl"> {!signedIn ?  <>-</>  :  <>{totalSupply}</> } / 8500 </span></span>

                <div id="mint" className="flex justify-around mt-8 mx-6">
                  <span className="flex text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold-italics">I would like: </span>
                  
                  <input 
                                      type="number" 
                                      min="1"
                                      max="15"
                                      value={how_many_lambs}
                                      onChange={ e => set_how_many_lambs(e.target.value) }
                                      name="" 
                                      className="items-center pl-4 text-5xl font-bold rounded text-white"
                                  />
                  
                  <span className="flex font-bold text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold">LAMB(S)!</span>
    
                </div>
                <div className="flex items-center content-center mt-5">
                  {saleStarted ? <button onClick={() => mintLambs(how_many_lambs)} id="rcorners" className="mt-6 text-5xl border-7  text-white hover:bg-purple-600 p-2 px-2 ">Mint for {(lambPrice * how_many_lambs) / (10 ** 18)} ETH (gas not included)</button>
                    : <button id="rcorners" className=" mt-6  text-5xl border-7 text-white p-2 ">Sale is not active / No wallet is connected</button>        
                }
              </div>
            </div> 
          </div>
        </div>      
    </div>  
  )
}