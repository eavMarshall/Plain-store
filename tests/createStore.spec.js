/** @jest-environment jsdom */
import createStore from "src/common/createStore";

describe("createStore tests", () => {
    it("should set initial state", () => {
        const store1InitialState = {
            name: "store1",
            value: 1
        };
        const Store1 = createStore(store1InitialState);

        expect(Store1.getState().name).toBe(store1InitialState.name);
        expect(Store1.getState().value).toBe(store1InitialState.value);
    });

    it("should set state", () => {
        const store1InitialState = {
            name: "store1",
            value: 1
        };
        const Store1 = createStore(store1InitialState);

        const store1UpdateData = {
            name: "store1 - loaded from initData",
            value: 123
        };

        Store1.setState(store1UpdateData);

        expect(Store1.getState().name).toBe(store1UpdateData.name);
        expect(Store1.getState().value).toBe(store1UpdateData.value);
    });

    it("should reset store", () => {
        const store1InitialState = {
            name: "store1",
            value: 1
        };
        const Store1 = createStore(store1InitialState);

        const updatedSate = 123;
        Store1.setState({value: updatedSate});
        expect(Store1.getState().value).toBe(updatedSate);

        Store1.resetStore();

        expect(Store1.getState().value).toBe(store1InitialState.value);
    });
});