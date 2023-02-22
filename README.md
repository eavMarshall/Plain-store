# Simple create store

Create your store

AppStore.js
````
import createStore from "src/common/createStore";

const initState = {
    key1: 'key1',
    key2: 'key2',
    key3: 'key3',
};

const store = {
    ...createStore(initState),
    // custom setters/getters here
};

export default store;
````

Then call useStore to subscribe and use
````
import React from "react";
import AppStore from "src/AppStore";

const useAppStore = AppStore.useStore();

const App = () => {
    const key1 = useAppStore(state => state.key1);
    const key2 = useAppStore(state => state.key2);
    const key3 = useAppStore(state => state.key3);

    return <div>
        <h1>Hello world</h1>

        <div onClick={() => AppStore.setState({key1: "I'm clicked!!"})}>Key1 = {key1}</div>
        <div onClick={() => AppStore.setState({key2: "I'm clicked!!"})}>Key2 = {key2}</div>
        <div onClick={() => AppStore.setState({key3: "I'm clicked!!"})}>Key3 = {key3}</div>
        <div onClick={() => AppStore.resetStore()}>Reset</div>
    </div>
};

export default App;
````

Integration with [Redux dev tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
Allows you to do time travel inspection
