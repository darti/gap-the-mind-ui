import { LoremIpsum } from "lorem-ipsum"
import NoteModel from "../../model/note"

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

const actions = {}

const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
