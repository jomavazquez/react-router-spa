import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroeById';

export const HeroScreen = ( { history } ) => {

    const { heroid } = useParams();

    // const hero = getHeroById( heroid );
    const hero = useMemo(() => getHeroById( heroid ), [ heroid ]);

    if( !hero ){
        return <Redirect to="/" />;
    }

    const handleReturn = () => {
        if( history.length <= 2 ){
            history.push('/');
        }else{
            history.goBack();
        }
    };

    const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img src={ `../assets/heroes/${ heroid }.jpg` } className="img-thumbnail animate__animated animate__fadeInLeft" alt={ superhero } />
            </div>
            <div className="col-8">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego</b>: { alter_ego }
                    </li>
                    <li className="list-group-item">
                        <b>Publisher</b>: { publisher }
                    </li>                    
                    <li className="list-group-item">
                        <b>First appearance</b>: { first_appearance }
                    </li>
                </ul>
                <h5 className="mt-4">Characters</h5>
                <p>{ characters }</p>
                
                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Back
                </button>

            </div>
        </div>
    )
}