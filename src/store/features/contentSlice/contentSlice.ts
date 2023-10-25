import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import initialState from './__initialState'
import getContentByPath from '../../../functions/getContentByPath/getContentByPath'

export const contentSlice = createSlice({
    name: 'contentSlice',
    initialState,
    reducers: {
        setCurrentToPath: (state, action: PayloadAction<string>) => {
            state.currentFolder = getContentByPath(state.content, action.payload)
        }
    }
})

export default contentSlice.reducer
export const { setCurrentToPath } = contentSlice.actions