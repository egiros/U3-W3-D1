import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // se necessario
import rootReducer from "./reducers"; // il tuo file di riduttori

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
