import {useSyncExternalStore} from "react";
import {getCallerFilePath} from "src/common/helpers/trace";

export default function createStore(initialState, storeName = false) {
    const connection = window.__REDUX_DEVTOOLS_EXTENSION__?.connect({
        name: storeName ? storeName : getCallerFilePath("createStore"),
    });
    connection?.init(initialState);

    let currentState = initialState;
    const listeners = new Set();
    const store = {
        getState: () => currentState,
        setState: newState => store.setAllState({...currentState, ...newState}),
        setAllState: newState => {
            currentState = newState;
            listeners.forEach(listener => listener(currentState));
            connection?.send("currentState", currentState);
        },
        subscribe: listener => {
            listeners.add(listener);
            return () => listeners.delete(listener);
        },
        useStore: () => (selector = state => state) => useSyncExternalStore(
            store.subscribe, () => selector(store.getState())
        ),
        resetStore: () => store.setAllState(initialState),
    };

    connection?.subscribe(event => {
        if (event && event.type === "DISPATCH") {
            currentState = {...currentState, ...JSON.parse(event.state)};
            listeners.forEach(listener => listener(currentState));
        }
    });

    return store;
}
