import createStore from "src/common/createStore";

const initState = {
    key1: 'key1',
    key2: 'key2',
    key3: 'key3',
};

const store = {
    ...createStore(initState),

    resetStore: () => {
        store.setAllState(initState)
    }
};

export default store;
