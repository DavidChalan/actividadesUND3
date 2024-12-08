import HeroesList from "./Tabla-Heroes/HeroesTabla";
import './App.css'


const App = () => {
  return (
    <div>
      <h1>Tabla de Héroes</h1>
{/* este nombre del plublisher--> debera ser uno de mi archivo heroes.json
y dependiendo de cual elija que dara una serie de suèrheroes*/}
      <HeroesList publisher="Marvel Comics" />
    </div>
  );
};

export default App;
