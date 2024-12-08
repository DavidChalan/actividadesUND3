import './footer.module.css'
/* Iconos MaterialUI */
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import PropTypes from 'prop-types';



function Footer({RRSS}) {
  return (
    <footer>
        {
            RRSS.map((red,index) => {
            if (red.nombre === "Facebook"){
                return <a key= {index} href={red.url} >  <FacebookIcon sx={{ fontSize: 40, color:"red" }}/>  {red.nombre}</a>
            }
            else if(red.nombre === "Instagram"){
                return <a key= {index} href={red.url} >  <InstagramIcon sx={{ fontSize: 40, color: "green" }}/>  {red.nombre}</a>
            }
            else if(red.nombre === "LinkedIn"){
              return <a key= {index} href={red.url} >  <LinkedInIcon sx={{ fontSize: 40, color: "green" }}/> {red.nombre}</a>
            }
            else if(red.nombre === "Google"){
              return <a key= {index} href={red.url} >  <GoogleIcon sx={{ fontSize: 40, color: "purple" }}/> {red.nombre}</a>
            }  
            else{
                return <a key= {index} href={red.url} >  <LanguageIcon sx={{ fontSize: 40, color:"brown" }}/>  {red.nombre}</a>
            }
          })
        }
        {/*Enlace del instituto */}
        <a href="https://iescuravalera.es" > <img src="/logo.png" width="50" alt="logoIES"/> IES Cura Valera </a>
    </footer>
  )
}
Footer.propTypes = {
  RRSS: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,  // nombre de la red social
      url: PropTypes.string.isRequired,     // URL de la red social
    })
  ).isRequired, // Aseguramos que RRSS es un arreglo de objetos y que es requerido
};


export default Footer