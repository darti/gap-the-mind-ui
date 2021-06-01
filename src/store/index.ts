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
  paths: ["ui", "notes", "lanes"],
})

export const key: InjectionKey<Store<State>> = Symbol()

const getters = {
  notesById: (state: State) =>
    state.notes.notes.reduce((ns, n) => Object.assign(ns, { [n.id]: n }), {}),
  notesByLane: (state: State, getters: any) => (id: string) => {
    const notes = getters.notesById()
    return state.lanes.lanes
      .filter((l) => l.id === id)
      .flatMap((ns) => ns.notesId.map((nid) => notes[nid]))
  },
}

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
