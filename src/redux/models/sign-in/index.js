// @flow
import { action, thunk } from 'easy-peasy'
import Axios from 'axios'

const Signin = {
  initialState: {
    loading: true,
    error: false,
    errorMessage: null,
    items: null,
  },

  fetchAction: action((state, payload) => {
    state.initialState.items = payload
    state.initialState.loading = false
  }),

  error: action((state, payload) => {
    state.initialState.loading = true
    state.initialState.error = true
    state.initialState.errorMessage = payload
  }),

  postSignin: thunk(async (actions, payload) => {
    try {
      const { email, password } = payload
      const url = 'http://127.0.0.1:8000/api/v1/user/signin'
      const params = {
        email: email,
        password: password,
      }
      let response = await Axios.post(url, params)
      actions.fetchAction(response.data)
    } catch (error) {
      actions.error(error || error.errorMessage)
    }
  }),

  init: thunk(async (actions, payload, { dispatch }) => {
    await dispatch.Signin.postSignin()
  }),
}

export default Signin
