import { userApi } from '../../entities/user/api/userApi';
import walletSlice from '../../entities/wallet/slice/walletSlice';
import rouletteSlice from '../../games/roulette/slices/rouletteSlice';
import rouletteSpinSlice from '../../games/roulette/slices/rouletteSpinSlice';
import slotSlice from '../../games/slots/slices/slotSlice';
import { userSlice } from './../../entities/user/slices/userSlice';
import { configureStore } from '@reduxjs/toolkit'


export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        [userApi.reducerPath]: userApi.reducer,
        roulette: rouletteSlice,
        wallet: walletSlice,
        rouletteSpin: rouletteSpinSlice,
        slot: slotSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch