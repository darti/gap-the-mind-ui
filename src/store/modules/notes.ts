import { LoremIpsum } from "lorem-ipsum"
import { store } from ".."
import NoteModel from "../../model/note"
import { v4 as uuidv4 } from "uuid"

export interface NotesState {
  notes: NoteModel[]
}

function default_notes(count: number): NoteModel[] {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  })

  const notes = new Array<NoteModel>()

  for (let i = 0; i < count; i++) {
    notes.push({
      id: uuidv4(),
      text: lorem.generateSentences(2),
      tags: lorem.generateWords(4).split(" "),
    })
  }

  return notes
}

const state = () => ({
  notes: default_notes(20),
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
}

const mutations = {
  editTags: (state: NotesState, payload: any) => {
    state.notes
      .filter((n) => n.id === payload.noteId)
      .forEach((n) => Object.assign(n, payload.tags))
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
