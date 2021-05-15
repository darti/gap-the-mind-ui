import {
  createStore,
  createLogger,
  Store,
  useStore as baseUseStore,
} from "vuex"
import { InjectionKey } from "vue"
import NoteModel from "../model/note"
import notes from "./modules/notes"

const debug = true

export interface State {
  notes: {
    notes: NoteModel[]
  }
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  modules: {
    notes,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})

export function useStore() {
  return baseUseStore(key)
}
