import {
  createStore,
  createLogger,
  Store,
  useStore as baseUseStore,
} from "vuex"
import createPersistedState from "vuex-persistedstate"
import { InjectionKey } from "vue"
import NoteModel from "../model/note"
import notes, { NotesState } from "./modules/notes"
import ui, { UiState } from "./modules/ui"

export interface State {
  notes: NotesState
  ui: UiState
}

const dataState = createPersistedState({
  paths: ["ui", "notes"],
})

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  modules: {
    notes,
    ui,
  },
  plugins: [createLogger(), dataState],
})

export function useStore() {
  return baseUseStore(key)
}
