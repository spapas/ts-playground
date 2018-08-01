import { enthusiasm } from './index';
import * as actions from '../actions';

describe('reducers', () => {
    it('should increment the enthusiasm', () => {
        const state = {
            enthusiasmLevel: 1,
            languageName: 'bar'
        }

        const newState = enthusiasm(state, actions.incrementEnthusiasm());
        state.enthusiasmLevel+=1;
        expect(newState).toEqual(state);
    });

    it('should decrement the enthusiasm', () => {
        const state = {
            enthusiasmLevel: 5,
            languageName: 'bar'
        }

        const newState = enthusiasm(state, actions.decrementEnthusiasm());
        state.enthusiasmLevel-=1;
        expect(newState).toEqual(state);
    });
    it('should not decrement the enthusiasm below 1', () => {
        const state = {
            enthusiasmLevel: 1,
            languageName: 'bar'
        }

        const newState = enthusiasm(state, actions.decrementEnthusiasm());
        expect(newState).toEqual(state);
    });
})
