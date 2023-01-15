import createStore from "src/common/createStore";

const initState = {
    key1: 'key1',
    key2: 'key2',
    key3: 'key3',
};

const store = {
    ...createStore(initState),
    setKey1: (value) => store.setState({key1: value}, "setKey1"),
    setKey2: (value) => store.setState({key2: value}, "setKey2"),
    setKey3: (value) => store.setState({key3: value}, "setKey3"),
};

export default store;
