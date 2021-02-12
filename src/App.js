import React from "react";
import { 
  Container,
  Button
} from 'reactstrap';

import AppNavbar from "./navbar/Navbar";

class App extends React.Component {
  render() {
    return (
      <div className="bg-gradient-dark-green h-100vh">
        <AppNavbar/>
        {/* Page content */}
        
        <Container className="py-5 py-lg-7 text-white">
          <h1>
            <b>Hedgehog</b> is a fully decentralized protocol for hedging against price changes of on-chain assets 
          </h1>
          <h6>
            No oracles and no ownership! Only a bonding curve.
          </h6>
          <Button outline color="link text-success" href="https://docs.hedgehog.financial">Read the docs</Button>
          <Button outline color="link text-success" href="https://github.com/Banq-Development/hedgehog-contracts">Github</Button>
        </Container>
        <Container className="py-4 py-lg-4 text-white">
          <h1>
            <b>Hodler</b> is the decentralized game to earn rewards for hodling.
          </h1>
          <h6>
            No oracles and no ownership! Only a bonding curve to penalize the sellers and reward the hodlers.
          </h6>
          <Button outline color="link text-success" href="https://docs.hodler.financial">Read the docs</Button>
          <Button outline color="link text-success" href="https://github.com/Banq-Development/hodler-contracts">Github</Button>
        </Container>
      </div>
    );
  }
}

export default App;
