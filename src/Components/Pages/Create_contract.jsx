import React, {useState} from 'react'
import { Container, Row, Col } from "reactstrap";

const Create_contract = () => {
    const [selectedChain, setSelectedChain] = useState('mumbai');
    const [deploymentStatus, setDeploymentStatus] = useState(null);
   
    const handleDeployContract = async () => {
      const form = new FormData();
      form.append('chain', selectedChain);
      form.append('contractType', 'nft721');
      form.append('contractCategory', 'simple');
      form.append('isCollectionContract', 'false');
  
      const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'X-API-Key': 'sk_live_28da0eca-c5b0-436b-b7d5-2908be31464f',
        },
        body: form,
      };
  
      try {
        const response = await fetch('https://api.verbwire.com/v1/nft/deploy/deployContract', options);
        const data = await response.json();
        setDeploymentStatus(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
  
    const handleChainChange = (event) => {
      setSelectedChain(event.target.value);
    };
  
    return (
    <section className="hero__section">
      <Container>
      
      <div>
        <h1 style={{color: "#fff"}}>Create ERC721 Contract</h1>
  
        {/* Dropdown for selecting the chain */}
        <label style={{color: "#fff"}}>
          <h2>Select Chain:</h2>
          <select value={selectedChain} onChange={handleChainChange} className='btn btn-secondary dropdown-toggle'>
            <option value="mumbai">Mumbai</option>
            {/* Add more chain options as needed */}
          </select>
        </label>
  
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
          <p>Create Your own Erc721 contract without code</p>
          <p>Additional content...</p>
        </div>
        <button onClick={handleDeployContract} className='btn btn-primary'>Deploy Smart Contract</button>
  
        {/* Display the deployment status if available */}
        {deploymentStatus && (
          <div style={{ marginTop: '10px' , color :"#fff"}}>
            <strong >Deployment Status:</strong> {deploymentStatus}
          </div>
        )}
      </div>
      </Container>
      </section>
    );
}

export default Create_contract