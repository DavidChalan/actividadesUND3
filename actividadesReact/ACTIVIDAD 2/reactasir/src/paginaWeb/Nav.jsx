import { IoIosContact } from "react-icons/io";
import { Link } from 'react-router-dom';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SchoolIcon from '@mui/icons-material/School';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/"><AccountBalanceIcon />Inicio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* <Nav.Link as={Link} to="/about"><AccountBalanceIcon /> Inicio</Nav.Link> */}
          <NavDropdown title={<span><AssessmentIcon /> Noticias</span>} id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/noticias/planigualdad"><SchoolIcon /> Noticias Plan de Igualdad</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/noticias/jefaturaestudios"><ImportantDevicesIcon /> Jefatura de Estudios</NavDropdown.Item>
            {/* <NavDropdown.Item as={Link} to="/noticias/otra"><ViewDayIcon /> OTRA</NavDropdown.Item> */}
          </NavDropdown>
          <Nav.Link as={Link} to="/Ofedu"><ViewDayIcon /> Oferta educativa</Nav.Link>
          <Nav.Link as={Link} to="/VideosFotos"><ViewDayIcon />Videos y Fotos</Nav.Link>
          <Nav.Link as={Link} to="/contacto"><IoIosContact />contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
