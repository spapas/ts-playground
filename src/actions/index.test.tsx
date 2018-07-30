import * as constants from '../constants'
import * as actions from './index'

describe('actions', () => {
    it('should create an action to increment enthusiasm', () => {
        expect(actions.incrementEnthusiasm().type).toBe(constants.INCREMENT_ENTHUSIASM)
    });
    it('should create an action to decrement enthusiasm', () => {
        expect(actions.decrementEnthusiasm().type).toBe(constants.DECREMENT_ENTHUSIASM)
    });
})
