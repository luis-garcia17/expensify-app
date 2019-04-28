import authReducer from '../../reducers/auth';

test('Should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: expect.any(String)
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid); //I used expect(state).toEqual the object.
});

test('Should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({uid: expect.any(String)}, action); //Andrew used uid: 'anything'
    expect(state).toEqual({});
});