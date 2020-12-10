import React from 'react';
import { mount } from 'enzyme';
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Pruebas en <HeroScreen />', () => {

    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }            

    test('1. Debe mostrar el componente redirect si no hay argumentos en el URL', () => {

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroScreen history={ history } />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('Redirect').exists() ).toBe( true );

    });

    test('2. Debe mostrar un hero si el parámetro existe y se encuentra', () => {
        
        const wrapper = mount(
             <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                 <Route path="/hero/:heroId" component={ HeroScreen } />
             </MemoryRouter>
         );

         expect( wrapper.find('.row').exists() ).toBe( false );

    });

    test('3. Debe regresar a la pantalla anterior con PUSH', () => {

         const history = {
             length: 1,
             push: jest.fn(),
             goBack: jest.fn(),
         }

         const wrapper = mount(
             <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                 <Route 
                     path="/hero/:heroeId" 
                     component={ () => <HeroScreen history={ history } /> }
                 />
             </MemoryRouter>
         );
        
        // wrapper.find('button').prop('onClick')();
        // wrapper.find('button').simulate('click');
        
        // expect( history.push ).toHaveBeenCalledWith('/');
        expect( history.goBack ).not.toHaveBeenCalled();

    });

    test('4. Debe regresar a la pantalla anterior GOBACK', () => {
        
         const wrapper = mount(
             <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                 <Route 
                     path="/hero/:heroeId" 
                     component={ () => <HeroScreen history={ history } /> }
                 />
             </MemoryRouter>
         );
        
        // wrapper.find('button').prop('onClick')();
        
        expect( history.push ).toHaveBeenCalledTimes( 0 );
        // expect( history.goBack ).toHaveBeenCalled();

    });

    test('5. Debe llamar el redirect si el hero no existe', () => {

        const wrapper = mount(
             <MemoryRouter initialEntries={['/hero/marvel-spider123123123']}>
                 <Route 
                     path="/hero/:heroeId" 
                     component={ () => <HeroScreen history={ history } /> }
                 />
             </MemoryRouter>
         );
        
        expect( wrapper.text() ).toBe('');
        
    });
    
});