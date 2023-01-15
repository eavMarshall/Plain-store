import {getCallerFilePath} from "src/common/helpers/trace";

const isDispatch = (event, callback) => event && event.type === "DISPATCH" && callback(event);

export const createDevToolConnection = (initialState, devToolListener, storeName) => {
    const connection = window.__REDUX_DEVTOOLS_EXTENSION__?.connect({
        name: storeName ? storeName : getCallerFilePath("createStore"),
    });
    connection?.init(initialState);
    connection?.subscribe(event => isDispatch(event, devToolListener));

    return connection;
};