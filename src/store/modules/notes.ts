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
  [id: string]: NoteModel
}

const state = () => ({})

const getters = {
  noteById: (s: NotesState) => (id: string) => s[id],
  allNotes: (s: NotesState) => Object.keys(s),
}

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
  deleteNote(
    { commit, state }: { commit: any; state: NotesState },
    { noteId }: { noteId: string }
  ) {
    commit("deleteNote", { noteId })
  },
}

const mutations = {
  editTags: (state: NotesState, payload: any) => {
    const note = state[payload.noteId]

    if (note) {
      note.tags = payload.tagList
    }
  },
  addNote: (state: NotesState) => {
    const note = emptyNote()
    state[note.id] = note
  },
  editNote: (state: NotesState, payload: any) => {
    const note = state[payload.noteId]

    if (note) {
      note.text = payload.content
    }
  },
  deleteNote: (state: NotesState, payload: any) => {
    delete state[payload.noteId]
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
