import * as React from 'react';
import { createMockStore } from 'redux-test-utils';
import { shallowWithStore } from 'enzyme-redux';
import Hello from './Hello'
import * as actions from '../actions';

describe('hello container', () => {
    const testState = {
        enthusiasmLevel: 3,
        languageName: 'test'
    };
    const store = createMockStore(testState);
    const component = shallowWithStore(<Hello />, store);
    it('should render properly', () => {

        expect(component.props().name).toBe('test')
        expect(component.props().enthusiasmLevel).toBe(3)
        expect(component.dive().find('.greeting').text()).toEqual('Hello test!!!')
    });

    it('should invoke the proper actions', () => {
        component.dive().find("button#dec").simulate("click");
        expect(store.isActionDispatched(actions.decrementEnthusiasm())).toBe(true);

        component.dive().find("button#inc").simulate("click");
        expect(store.isActionDispatched(actions.incrementEnthusiasm())).toBe(true);
    });



}
