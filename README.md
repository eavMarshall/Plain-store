# Simple create store
Create store using reacts useSyncExternalStore hook, letting you create stores from plain objects

````
import {useSyncExternalStore} from "react";

export default function createStore(initialState) {
    let currentState = initialState;
    const listeners = new Set();
    const store = {
        getState: () => structuredClone(currentState),
        setState: newState => store.setAllState({...currentState, ...newState}),
        setAllState: newState => {
            currentState = newState;
            listeners.forEach(listener => listener(currentState));
        },
        subscribe: listener => {
            listeners.add(listener);
            return () => listeners.delete(listener);
        },
        useStore: () => (selector = state => state) => useSyncExternalStore(
            store.subscribe, () => selector(store.getState())
        ),
    };
    return store;
}
````
