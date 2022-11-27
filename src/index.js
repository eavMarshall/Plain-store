import React from "react";
import { createRoot } from 'react-dom/client';

import App from "src/App";
import AppStore from "src/AppStore";

const container = document.getElementById('app');
const root = createRoot(container);

const state = AppStore.getState(); // access state outside of react components
console.log("state = " + JSON.stringify(state));

root.render(
    <App/>
);
