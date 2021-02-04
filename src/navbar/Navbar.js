import React from "react";
import {
  Container,
  Navbar,
  NavLink,
  Button
} from "reactstrap";
import logo from '../images/hedgehog_fat_filled_transparent_black.png';

class AppNavbar extends React.Component {
  render() {
    return (
      <div >
        <Navbar
          className="navbar-top bg-gradient-success"
          expand="md"
        >
          <NavLink className="text-light text-left" >
            <img src={logo} alt="logo" height={90} width={120}/>
          </NavLink>
          <Container className="px-4">
          </Container>
          <Button className="text-light text-right"  color="primary" type="button-link" href="http://app.hedgehog.financial/"> Launch hedgehog </Button> 
          <Button className="text-light text-right"  color="primary" type="button-link" href="http://app.hodler.financial/"> Launch hodler </Button> 
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
