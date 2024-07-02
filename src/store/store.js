
import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../slice/slices'
const store = configureStore({
    reducer:{
        counter : counterReducer

    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //       serializableCheck: {
    //         // Ignore these action types
    //         ignoredActions: [ '/user/details/fulfilled'],
    //         // // Ignore these field paths in all actions
    //         // ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
    //         // // Ignore these paths in the state
    //         // ignoredPaths: ['items.dates']
    //       }
    //     })
})

export default store