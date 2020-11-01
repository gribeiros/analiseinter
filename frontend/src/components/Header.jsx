import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary" dark expand="md">
        <NavbarBrand href="/">Analyze</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/resultados/">Resultados</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="//">Usuário</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Listas
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/opttion/" style={{ color: 'red' }}>Option 1</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Option 3
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavLink href="/option/" style={{ color: 'red' }}>Fale Conosco!</NavLink>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;