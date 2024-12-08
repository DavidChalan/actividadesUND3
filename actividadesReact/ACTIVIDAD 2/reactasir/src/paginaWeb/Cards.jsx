import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

// aqui podemos modificar el contenido de nuestras cards
function Tarjeta({title, text, imageSrc, buttonText, buttonLink}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageSrc} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant='primary' href={buttonLink}>{buttonText}</Button>
      </Card.Body>
    </Card>
  );
}
// Validación de las props
Tarjeta.propTypes = {
    title: PropTypes.string.isRequired, // Obligatorio y debe ser una cadena
    text: PropTypes.string.isRequired,  // Obligatorio y debe ser una cadena
    imageSrc: PropTypes.string.isRequired, // Obligatorio y debe ser una cadena (URL)
    buttonText: PropTypes.string.isRequired, // Obligatorio y debe ser una cadena
    buttonLink: PropTypes.string.isRequired, // Obligatorio y debe ser una cadena (URL)
  };
export default Tarjeta;
