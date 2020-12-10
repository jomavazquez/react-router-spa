import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {
    
    test('1. Debe retornar el estado por defecto', () => {
        
        const state = authReducer({ logged: false }, {});
        expect( state ).toEqual({ logged: false });

    });

    test('2. Debe autenticar y colocar el name del usuario', () => {
        
        const action = {
            type: types.login,
            payload: {
                name: 'Hernando'
            }
        }

        const state = authReducer({ logged: false }, action);
        expect( state ).toEqual({ 
            logged: true,
            name: action.payload.name
        });

    });

    test('3. Debe borrar el name del usuario y logged en false', () => {
        
        const action = {
            type: types.logout
        }

        const state = authReducer({ logged: true, name: 'Pedro' }, action);
        expect( state ).toEqual({ logged: false });

    });    

});