
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IWallet } from "../model/Wallet";
import { RootState } from "../../../app/store/store";

const initialState: IWallet = {
    game_balance: 2500
}

const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        setBalance: (state, action: PayloadAction<number>) => {
            state.game_balance = state.game_balance + action.payload
        }
    }

})

export const {
    setBalance
} = walletSlice.actions



export const selectBalance = (state: RootState) => state.wallet.game_balance

export default walletSlice.reducer