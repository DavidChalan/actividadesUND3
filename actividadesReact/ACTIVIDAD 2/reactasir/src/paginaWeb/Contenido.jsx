import Nav from './Nav'
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import Aside from './Aside'
import ControlledCarousel from '../Carousel';
import './contenido.module.css'
import Tarjeta from './Cards';




function Contenido() {
  return (
    <>
      <Router> {/* El contenedor principal que permite el uso de rutas. */}
        <Nav />
        <main>
          {/* <Section/> */}
          <section>
            <Routes> {/* Contiene las definiciones de rutas. */}
              <Route exact path="/" element={<Home />} /> {/* Define una ruta específica y su contenido asociado. */}
              <Route path="/noticias" element={<Noticias />}>
                <Route path="/noticias/planigualdad" element={<Planigualdad />} />
                <Route path="/noticias/jefaturaestudios" element={<Jefaturaestudios />} />
              </Route>
              <Route path="/Ofedu" element={<Ofedu />} />
              <Route path="/videosfotos" element={<VideosFotos />} />
              {/* Ruta 404 - Página no encontrada */}
              <Route path="*" element={<Contacto />} />
            </Routes>
          </section>
          <aside>
            <Aside />
          </aside>
        </main>
      </Router>
    </>
  )
}

export default Contenido
function Home() {
  return (
    <div className="container mt-4"> {/* Contenedor principal con margen superior */}
      <h1 className='title'>Bienvenido a la página de inicio</h1>
      <div className="row"> {/* Sistema de grillas de Bootstrap */}
        <div className="col-md-4"> {/* Una columna que ocupa 4 espacios en pantallas medianas */}
          {/* todo este cntenido son lo que tiene dentro mis tarjetas , y va acorde con Cards.jsx*/}
          <Tarjeta
            title="Almeria"
            text="Este es un hermoso paisaje con vistas increíbles."
            imageSrc="https://t3.ftcdn.net/jpg/02/48/54/30/360_F_248543017_qg21vktvFRHXWIV54pqIGZ26uSpX0qgg.jpg"
            buttonText="Ver más"
            buttonLink="https://stock.adobe.com/es/search?k=almeria"
          />
        </div>
        <div className="col-md-4">
          <Tarjeta
            title="Granada"
            text="Una vista que te dejará sin aliento."
            imageSrc="https://1001reasonstolearnspanish.com/wp-content/uploads/2022/06/granada.jpg"
            buttonText="Explorar"
            buttonLink="https://1001reasonstolearnspanish.com/como-granada-no-hay-nada/"
          />
        </div>
        <div className="col-md-4">
          <Tarjeta
            title="Sevilla"
            text="Descubre la belleza de este lugar mágico."
            imageSrc="https://images.squarespace-cdn.com/content/v1/5a86b05bcf81e0af04936cc7/1731610445391-YG5STNI70SCQCUEC5P8I/que-ver-en-sevilla.jpg?format=1500w"
            buttonText="Descubrir"
            buttonLink="https://www.sitiosdeespana.es/que-ver-en-sevilla"
          />
        </div>
        {/* los className son de bootstrap */}
      </div>
    </div>

  );
}



// function About2() {
//   return <h2>Datos en aside</h2>;
// }
function Noticias() {
  return <div>
    <h1>NOTICIAS DEl INSTITUTO</h1>
    <h5>Aqui podemos encontrar las noticias del instituto</h5>
    <hr />
    <Outlet />
  </div>
}


function Planigualdad() {
  return <>
    <h2>Noticias de Plan de Igualdad</h2>;
    <p>Como todos los años, el IES Cura Valera quiere destacar la importancia de la mujer en el 8M y durante esta semana se han organizado las siguientes actividades:

      Actividades en tutoría destacando a la mujer en diferentes ámbitos como: Ciencias Sociales, Biología, Matemáticas, Física y Química o Tecnología. Queremos destacar el visionado de vídeos como la película de Figuras Ocultas o un documental de la importancia de la mujer en las TIC
      Mural con mujeres destacadas según el abecedario que se ha colocado a la entrada del instituto y otro en el parque
      Realización de una cápsula del tiempo colocada en el parque y que se abrirá dentro de 20 años
    </p>
  </>
}
function Jefaturaestudios() {
  return <>

    <h2>Noticias de Jefatura de Estudios</h2>
    <p>Hoy, 3 de diciembre, Día de la Discapacidad, lo hemos
      celebrado en nuestro instituto con unos talleres organizados
      por el profesorado del Aula Específica y de Orientación.
      El alumnado de 1° ESO ha pasado un rato muy agradable y ha aprendido mucho
      con la ayuda del alumnado del Aula Específica.
    </p>
  </>
}

function Ofedu() {
  return <>

  </>
}

function VideosFotos() {
  return <>
    <ControlledCarousel />;
  </>
}

function Contacto() {
  return <>
    <h1>Página no encontrada</h1>
    <p>Lo siento, la página que buscas no existe.</p>
  </>
}

