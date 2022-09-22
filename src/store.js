import { configureStore } from "@reduxjs/toolkit";
import publishReducer from './features/publish/publishSlice'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import testDetailReducer from './features/testDetails/testDetailSlice'
import { combineReducers } from "@reduxjs/toolkit";


// const persistConfig = {
//     key: 'root',
//     storage,
//   }

//   const rootReducer = combineReducers({ 
   
//     middleware: [thunk]
    
//   })
  
//   const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: {
      publisher: publishReducer,
      testDetail: testDetailReducer,
    }
    
})


export const persistor = persistStore(store)