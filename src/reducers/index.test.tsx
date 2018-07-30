import { enthusiasm } from './index';
import * as actions from '../actions';

describe('reducers', () => {
    it('should increment the enthusiasm', () => {
        let state = {
            enthusiasmLevel: 1,
            foo: 123
        }

        let new_state = enthusiasm(state, actions.incrementEnthusiasm());
        state.enthusiasmLevel+=1;
        expect(new_state).toEqual(state);
    });

    it('should decrement the enthusiasm', () => {
        let state = {
            enthusiasmLevel: 5,
            foo: 123
        }

        let new_state = enthusiasm(state, actions.decrementEnthusiasm());
        state.enthusiasmLevel-=1;
        expect(new_state).toEqual(state);
    });
    it('should not decrement the enthusiasm below 1', () => {
        let state = {
            enthusiasmLevel: 1,
            foo: 123
        }

        let new_state = enthusiasm(state, actions.decrementEnthusiasm());
        expect(new_state).toEqual(state);
    });
})
