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
import lanes, { LaneState } from "./modules/lanes"

export interface State {
  notes: NotesState
  ui: UiState
  lanes: LaneState
}

const dataState = createPersistedState({
  paths: ["ui", "notes"],
})

export const key: InjectionKey<Store<State>> = Symbol()

const getters = {}

export const store = createStore<State>({
  modules: {
    notes,
    lanes,
    ui,
  },
  getters,
  plugins: [createLogger(), dataState],
})

export function useStore() {
  return baseUseStore(key)
}
