import { LoremIpsum } from "lorem-ipsum"
import { store } from ".."
import NoteModel from "../../model/note"
import { v4 as uuidv4 } from "uuid"

function emptyNote(): NoteModel {
  return {
    id: uuidv4(),
    text: "",
    tags: [],
  }
}

export interface NotesState {
  notes: NoteModel[]
}

const state = () => ({
  notes: [],
})

const getters = {}

const actions = {
  editTags(
    { commit, state }: { commit: any; state: NotesState },
    { noteId, tags }: { noteId: string; tags: string }
  ) {
    const tagList = tags
      .split("#")
      .map((s) => s.trim())
      .filter((s) => s.length > 0)

    commit("editTags", { noteId, tagList })
  },
  addNote({ commit, state }: { commit: any; state: NotesState }) {
    commit("addNote")
  },
  editNote(
    { commit, state }: { commit: any; state: NotesState },
    { noteId, content }: { noteId: string; content: any }
  ) {
    commit("editNote", { noteId, content })
  },
}

const mutations = {
  editTags: (state: NotesState, payload: any) => {
    state.notes
      .filter((n) => n.id === payload.noteId)
      .forEach((n) => (n.tags = payload.tagList))
  },
  addNote: (state: NotesState) => {
    state.notes.push(emptyNote())
  },
  editNote: (state: NotesState, payload: any) => {
    state.notes
      .filter((n) => n.id === payload.noteId)
      .forEach((n) => (n.text = payload.content))
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
