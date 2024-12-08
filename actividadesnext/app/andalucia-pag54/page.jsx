'use client'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import Link from 'next/link';

function CarouselFadeExample() {
  return (
    <div style={{width:500, height:450}}>
    <Carousel fade>
      <Carousel.Item>
        <Image src="https://t3.ftcdn.net/jpg/02/48/54/30/360_F_248543017_qg21vktvFRHXWIV54pqIGZ26uSpX0qgg.jpg" width="500" height="450" alt="Almería" unoptimized="true" />
        <Carousel.Caption>
          <h3>ALMERÍA</h3>
          <Link href="/andalucia-pag54/almeria"><h4>¿Quieres saber más?</h4></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://www.cadizturismo.com/storage/app/media/uploaded-files/p-cadiz_turismo.jpg" width="500" height="450" alt="Almería" unoptimized="true" />
        <Carousel.Caption>
          <h3>CADIZ</h3>
          <Link href="/andalucia-pag54/cadiz"><h4>¿Quieres saber más?</h4></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="https://www.spain.info/.content/imagenes/cabeceras-grandes/andalucia/vistas-cordoba-s158982617.jpg" width="500" height="450" alt="Almería" unoptimized="true" />
        <Carousel.Caption>
          <h3>CORDOBA</h3>
          <Link href="/andalucia-pag54/cordoba"><h4>¿Quieres saber más?</h4></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://www.spain.info/.content/imagenes/cabeceras-grandes/andalucia/alhambra-granada-20044065-istock.jpg" width="500" height="450" alt="Almería" unoptimized="true" />
        <Carousel.Caption>
          <h3>GRANADA</h3>
          <Link href="/andalucia-pag54/granada"><h4>¿Quieres saber más?</h4></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>  
      <Image src="https://parkia.es/wp-content/uploads/huelva.jpg" width="500" height="450" alt="Almería" unoptimized="true" />
        <Carousel.Caption>
        <h3>HUELVA</h3>
          <Link href="/andalucia-pag54/huelva"><h4>¿Quieres saber más?</h4></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      
      <Image src="https://multimedia.andalucia.org/media/3828008EC0C948DD983E9A9DDA8C5A14/img/0AE8D1DDA5324CABB4C9CF2E2FB50725/JA_Catedral_07.jpg?responsive" width="500" height="450" alt="Almería" unoptimized="true" />
        <Carousel.Caption>
        <h3>JAEN</h3>
          <Link href="/andalucia-pag54/jaen"><h4>¿Quieres saber más?</h4></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      
      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/M%C3%A1laga_-_vistas_desde_el_Parador_de_Gibralfaro_01_%28cropped%29.jpg/1200px-M%C3%A1laga_-_vistas_desde_el_Parador_de_Gibralfaro_01_%28cropped%29.jpg" width="500" height="450" alt="Almería" unoptimized="true" />
        <Carousel.Caption>
        <h3>MALAGA</h3>
          <Link href="/andalucia-pag54/malaga"><h4>¿Quieres saber más?</h4></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      
      <Image src="https://cdn.pixabay.com/photo/2020/05/12/18/29/city-5164368_1280.jpg" width="500" height="450" alt="Almería" unoptimized="true" />
        <Carousel.Caption>
        <h3>SEVILLA</h3>
          <Link href="/andalucia-pag54/sevilla"><h4>¿Quieres saber más?</h4></Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselFadeExample;