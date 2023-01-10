import React from "react";
import AppStore from "src/AppStore";

const useAppStore = AppStore.useStore();

const App = () => {
    const key1 = useAppStore(state => state.key1);
    const key2 = useAppStore(state => state.key2);
    const key3 = useAppStore(state => state.key3);

    return <div>
        <h1>Hello world</h1>

        <button onClick={() => AppStore.setState({key1: "I'm clicked!!"})}>Key1 = {key1}</button>
        <br/>
        <button onClick={() => AppStore.setState({key2: "I'm clicked!!"})}>Key2 = {key2}</button>
        <br/>
        <button onClick={() => AppStore.setState({key3: "I'm clicked!!"})}>Key3 = {key3}</button>
        <br/>
        <button onClick={() => AppStore.resetStore()}>Reset</button>
        <br/>
        <p>install: <a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en">redux-devtools chrome plugin</a></p>
    </div>
};

export default App;
