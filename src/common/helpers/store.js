
export const loadStores = (stores = {}) => Object.keys(stores).forEach(
    key => stores[key].setState(window.initData[key])
);
