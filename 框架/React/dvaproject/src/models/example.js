import * as example from '../services/example'


export default {

  namespace: 'example',

  state: {
    page: 1
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen((pathname) => {
        console.log(pathname)
        if(pathname.pathname === '/') {
          dispatch({ type: 'getFile' })
        }
      })
    },

  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    * getFile({ payload }, { call, put }) {  // eslint-disable-line
      yield call(example.getFile, payload);
      // yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  },

};
