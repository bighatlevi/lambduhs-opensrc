import {INFURA_ADDRESS, ADDRESS, ABI} from "../../config.js"
import Web3 from "web3";

// Import the json containing all metadata. not recommended, try to fetch the database from a middleware if possible, I use MONGODB for example
import traits from "../../database/finalTraits.json";

const infuraAddress = INFURA_ADDRESS

const lambApi = async(req, res) => {

    // SOME WEB3 STUFF TO CONNECT TO SMART CONTRACT
  const provider = new Web3.providers.HttpProvider(infuraAddress)
  const web3infura = new Web3(provider);
  const lambDuhsContract = new web3infura.eth.Contract(ABI, ADDRESS)
  const totalSupply = await lambDuhsContract.methods.totalSupply().call();

// THE ID YOU ASKED IN THE URL
  const query = req.query.id;

  if(parseInt(query) < totalSupply) {

    const trait = traits[parseInt(query)]

    // CHECK OPENSEA METADATA STANDARD DOCUMENTATION https://docs.opensea.io/docs/metadata-standards
    let metadata = {}

    // GENERAL LAMB METADATA
      metadata = {
        "name": "Lamb Duh #" + parseInt(query),
        "description": "A collection of 8,500 digital lambs wandering the grasslands of the Ethereum blockchain!",
        "tokenId" : parseInt(query),
        "image": `https://gateway.pinata.cloud/ipfs/${trait["imageIPFS"]}`,
        "external_url":"https://www.lambduhs.com",
        "attributes": [          
            {
              "trait_type": "Tier",
              "value": trait["Tier"]
            },
            {
              "trait_type": "Wool",
              "value": trait["Wool"]
            },
            {
              "trait_type": "Face",
              "value": trait["Face"]
            },
            {
              "trait_type": "Body",
              "value": trait["Body"]
            },
            {
              "trait_type": "Head",
              "value": trait["Head"]
            },
        ]
      }
      
      // console.log(metadata)
    
    res.statusCode = 200
    res.json(metadata)
  } else {
    res.statuscode = 404
    res.json({error: "This lamb has not been minted yet"})

  }
  // this is after the reveal
}

export default lambApi