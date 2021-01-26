import {defaultStyles, defaultTitle} from "@/constants";
import {clone} from "@core/utils";

const defaultState = {
    title: defaultTitle,
    rowState: {},
    colState:{},
    dataState: {},
    styleState: {},
    currentText: '',
    currentStyles: defaultStyles,
    openedDate: new Date().toJSON()
}

const normalize = state => ({
    ...state,
    currentStyle: defaultStyles,
    currentText: ''
})

export function normalizeInitialState(state)  {
    return state ? normalize(state) : clone(defaultState)
}