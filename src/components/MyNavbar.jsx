import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BsCart4, BsSearch } from 'react-icons/bs';
import "../style/navbar.css"

function NavScrollExample() {
    return (
        <Navbar bg="light" expand="lg">
            <Container >
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                    <button className='navButton'><BsSearch /></button>
                    <Nav
                        className="me-auto my-2 my-lg-0 m-auto navbar_items"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/" className='m-auto text-black'>Home</Nav.Link>
                        <Nav.Link href="#aboutus" className='m-auto text-black'>About Us</Nav.Link>
                        <NavDropdown title="Menu" id="navbarScrollingDropdown" className='m-auto  text-black'>
                            <NavDropdown.Item href="/menu">Menu </NavDropdown.Item>
                            <NavDropdown.Item href="/menu1">Menu 2</NavDropdown.Item>
                            <NavDropdown.Item href="/menu2">Menu 3</NavDropdown.Item>
                        </NavDropdown>

                        <Navbar.Brand href="#"><img
                            src="https://wordpress.vecurosoft.com/grillino/wp-content/uploads/2023/04/light-Grili.svg"
                            alt="light Grili" width={160}
                        /></Navbar.Brand>

                        <NavDropdown title="Blog" id="navbarScrollingDropdown" className='m-auto'>
                            <NavDropdown.Item href="#blog">Blog </NavDropdown.Item>
                            <NavDropdown.Item href="#blog1">Blog 2</NavDropdown.Item>
                            <NavDropdown.Item href="#blog2">Blog 3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Pages" id="navbarScrollingDropdown" className='m-auto'>
                            <NavDropdown.Item href="#pages">Pages </NavDropdown.Item>
                            <NavDropdown.Item href="#pages1">Pages 2</NavDropdown.Item>
                            <NavDropdown.Item href="#pages2">Pages 3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Contact Us" id="navbarScrollingDropdown" className='m-auto'>
                            <NavDropdown.Item href="#contact">Contact Us </NavDropdown.Item>
                            <NavDropdown.Item href="#contact1">Contact Us 2</NavDropdown.Item>
                            <NavDropdown.Item href="#contact2">Contact Us 3</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <button className='navButton'><BsCart4 /></button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;