import Counter from "./components/counter/Counter";
import {Provider} from "react-redux";
import {setupStore} from "./store/reduxStore";

const App = () => {
    return (
        <Provider store={setupStore()}>
            <div style={{ padding: '2rem' }}>
                <Counter/>
            </div>
        </Provider>
    );
}

export default App;
