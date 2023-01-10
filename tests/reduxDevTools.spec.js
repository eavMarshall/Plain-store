/** @jest-environment jsdom */
import createStore from "src/common/createStore";

window.__REDUX_DEVTOOLS_EXTENSION__ = {
    connect: ({name}) => {
        return {
            init: (initialState) => {
                window.__REDUX_DEVTOOLS_EXTENSION__.initialState = initialState;
            },
            subscribe: (listener) => {
                window.__REDUX_DEVTOOLS_EXTENSION__.listener = listener;
            },
            send: (type, state) => {
                window.__REDUX_DEVTOOLS_EXTENSION__.state = state;
            }
        }
    }
};

describe("Redux dev tools tests", () => {
    it("should hook into redux dev tools", () => {
        const store1InitialState = {
            name: "store1",
            value: 1
        };
        const Store1 = createStore(store1InitialState);

        expect(window.__REDUX_DEVTOOLS_EXTENSION__.initialState.name).toBe(store1InitialState.name);
        expect(window.__REDUX_DEVTOOLS_EXTENSION__.initialState.value).toBe(store1InitialState.value);

        expect(Store1.getState().name).toBe(store1InitialState.name);
        expect(Store1.getState().value).toBe(store1InitialState.value);

        const store1UpdateData = {
            name: "store1 - loaded from initData",
            value: 123
        };

        Store1.setState(store1UpdateData);

        expect(Store1.getState().name).toBe(store1UpdateData.name);
        expect(Store1.getState().value).toBe(store1UpdateData.value);

        window.__REDUX_DEVTOOLS_EXTENSION__.listener({
            type: "DISPATCH",
            state: JSON.stringify(store1InitialState)
        });

        expect(Store1.getState().name).toBe(store1InitialState.name);
        expect(Store1.getState().value).toBe(store1InitialState.value);
    });
})