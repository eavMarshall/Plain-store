import {useSyncExternalStore} from "react";
import {createDevToolConnection} from "src/common/helpers/redux";

export default function createStore(initialState, storeName = false) {
    let currentState = initialState;
    const listeners = new Set();

    const setStateAndNotifyListeners = (newState) => {
        currentState = newState;
        listeners.forEach(listener => listener(currentState));
    };

    const devToolListener = (event) => setStateAndNotifyListeners({...currentState, ...JSON.parse(event.state)});
    const connection = createDevToolConnection(initialState, devToolListener, storeName);

    const store = {
        getState: () => currentState,
        setState: (newState, actionName = false) => store.setAllState({...currentState, ...newState, actionName}, actionName),
        setAllState: (newState, actionName) => {
            setStateAndNotifyListeners(newState);
            connection?.send(actionName ? actionName : "currentState", currentState);
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

    return store;
}