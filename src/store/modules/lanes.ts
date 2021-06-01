import LaneModel from "../../model/lane"

export interface LaneState {
  lanes: LaneModel[]
}

const state = () => ({
  lanes: [
    {
      id: "666",
      label: "List 666",
      notesId: [
        "64cad85c-057c-452d-a5bf-1535b1fbfead",
        "13d151e2-9209-41ac-b83f-cc46987cb9c8",
      ],
    },
  ],
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
