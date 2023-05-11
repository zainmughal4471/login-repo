import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

function CustomNavbar() {
  const [Isopen,setIsOpen] = useState(false)
  const toggle = () =>setIsOpen(!Isopen)
  return (
    <div className=''>
      <Navbar color="light" light expand="md">
          <NavbarBrand href="/" className="mr-auto text-[#ddd]">Strapi App</NavbarBrand>
          <NavbarToggler onClick={toggle} className="mr-2" />
          <Collapse isOpen={Isopen} navbar>
            <Nav navbar>

              <NavItem>
                <NavLink href="/logout" className='text-[#ddd]'>Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </div>
  )
}

export default CustomNavbar 
