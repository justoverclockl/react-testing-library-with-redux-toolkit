# Test component with redux toolkit - Marco Colia

First we need to be sure that all the packages are updated to the latest version:

-  "@testing-library/jest-dom": "^6.4.5",
-   "@testing-library/react": "^15.0.6",
-   "@testing-library/user-event": "^14.5.2",

## In a folder called test-utils we need to create a custom wrapper

```javascript
import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import {setupStore} from "../store/reduxStore";

export function renderWithProviders(
    ui,
    {
        preloadedState = {},
        store = setupStore(),
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return { store, ...render(ui, { wrapper: Wrapper }) }
}

```

## Now inside another folder, we need to setup our redux store with all of our reducers

```javascript
import counterReducer from "../redux/counterSlice"
import {combineReducers, configureStore} from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
    counter: counterReducer
})

export function setupStore() {
    return configureStore({
        reducer: rootReducer,
    })
}

```

Now, create a component (counter component example provided in this repository) and 
in the project directory, you can run:

### `npm run test`
