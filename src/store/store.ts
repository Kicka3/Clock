import {combineReducers, legacy_createStore as createStore} from "redux";
import {counterReducer} from "../reducers/CounterReducer";
import {loadState, saveState} from "../utils/localstorage-utils";


const rootReducer = combineReducers({
    counterReducer: counterReducer
});


// export type RootStore = typeof store
export type RootReducerType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, loadState());

store.subscribe(() => {
    saveState({
        counterReducer: store.getState().counterReducer
    })
})


//@ts-ignore
window.store = store;