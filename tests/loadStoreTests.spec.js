/** @jest-environment jsdom */
import {loadStores} from "src/common/helpers/store.js";
import createStore from "src/common/createStore.js";

describe("store helper tests", () => {
    describe("loadStores tests", () => {
        it("should load stores from window.initData", () => {
            const store1InitialState = {
                name: "store1",
                value: 1
            };
            const Store1 = createStore(store1InitialState);
            const store2InitialState = {
                name: "store2",
                value: 2
            };
            const Store2 = createStore(store2InitialState);

            const stores = {
                Store1,
                Store2,
            };

            const store1UpdateData = {
                name: "store1 - loaded from initData",
                value: 123
            };

            const store2UpdateData = {
                name: "store2 - loaded from initData",
                value: 456
            };

            window.initData = {
                Store1: store1UpdateData,
                Store2: store2UpdateData,
            }

            expect(Store1.getState().name).toBe(store1InitialState.name);
            expect(Store1.getState().value).toBe(store1InitialState.value);

            expect(Store2.getState().name).toBe(store2InitialState.name);
            expect(Store2.getState().value).toBe(store2InitialState.value);

            loadStores(stores);

            expect(Store1.getState().name).toBe(store1UpdateData.name);
            expect(Store1.getState().value).toBe(store1UpdateData.value);

            expect(Store2.getState().name).toBe(store2UpdateData.name);
            expect(Store2.getState().value).toBe(store2UpdateData.value);
        });
    });
});
