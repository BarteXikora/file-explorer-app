import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import initialState from './__initialState'
import getContentByPath from '../../../functions/getContentByPath/getContentByPath'

export const contentSlice = createSlice({
    name: 'contentSlice',
    initialState,
    reducers: {
        setPath: (state, action: PayloadAction<string[]>) => {
            state.currentPath = action.payload
        },

        setCurrentToPath: (state) => {
            state.currentFolder = getContentByPath(state.content, state.currentPath)
        }
    }
})

export default contentSlice.reducer
export const { setPath, setCurrentToPath } = contentSlice.actions