import { createStore, combineReducers } from "redux"
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Leaders } from "./leaders";
import { Promotions } from "./promotions";


export const ConfigureStore = ()=> {
    const store = createStore(
        // Reducer,
        // initialState
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            leaders: Leaders,
            promotions: Promotions
        })
    );
    
    return store;
}