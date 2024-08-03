import { setLoading, setView } from '../action';

const initialState = {
  loading: true,
  view: 'grid'
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case setLoading:
      return { ...state, loading: action.loading };
    case setView:
      return { ...state, view: action.view };
    default:
      return state;
  }
};

export default ui;
