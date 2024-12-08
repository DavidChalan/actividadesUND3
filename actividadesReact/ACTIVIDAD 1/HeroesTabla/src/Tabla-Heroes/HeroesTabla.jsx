// import React from 'react';
import PropTypes from 'prop-types';
import heroes from '../heroes.json';
import './HeroesLista.css';

//HeroRow--> fila de heroes
const HeroRow = ({ hero }) => (
    <tr>
        <td>{hero.superhero}</td>
        <td>{hero.publisher}</td>
        <td>{hero.alter_ego}</td>
        <td>{hero.first_appearance}</td>
        <td>{hero.characters}</td>
    </tr>
);

// garantiza que el componente reciba los datos 
// en el formato correcto
HeroRow.propTypes = {
// el shape --> permite definir qué propiedades debe tener esetos 
//objeto, (si son obligatorios o que tipo de datos se espera)
    hero: PropTypes.shape({
// PropTypes.string --> Significa que el valor debe ser una cadena de texto
// isRequired --> Significa que la propiedad es obligatoria.
        superhero: PropTypes.string.isRequired, //obligatorio
        publisher: PropTypes.string.isRequired, //obligatorio
        alter_ego: PropTypes.string,            //opcional
        first_appearance: PropTypes.string,     //opcional
        characters: PropTypes.string,           //opcional
//Cada línea dentro de { ... } 
//especifica las propiedades que el objeto 
//hero debe tener, su tipo, y si son obligatorias.

    }).isRequired,
};

const HeroesList = ({ publisher }) => {
    const filteredHeroes = heroes.filter(hero => hero.publisher === publisher);

    return (
        <div className="lista-heroes">
            <h1 className="titulo-tabla">Lista de Héroes</h1>
            {filteredHeroes.length > 1 ? (
// EL 1 lo que significa es que si:
//* Si filteredHeroes.length (el número de héroes) es mayor que 1, 
//entonces se mostrará la tabla.
//Si filteredHeroes.length es 1 o menos, 
//entonces se mostrará el mensaje "No hay héroes para mostrar.".
                <table className="lista-tabla" aria-label="Lista de Héroes">
                    <thead>
                        <tr>
                            <th scope="col">Superhéroe</th>
                            <th scope="col">Editorial</th>
                            <th scope="col">Alter Ego</th>
                            <th scope="col">Primera Aparición</th>
                            <th scope="col">Personajes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredHeroes.map((hero, index) => (
                            <HeroRow key={index} hero={hero} />
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="NO-resultado">No hay héroes para mostrar.</p>
            )}
        </div>
    );
};

HeroesList.propTypes = {
    publisher: PropTypes.string.isRequired,
};

export default HeroesList;
