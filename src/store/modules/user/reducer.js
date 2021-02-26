import produce from "immer";

const INITIAL_STATE = {
  user: {},
  otherUser: false,
  loading: false,
};

const user = (state = INITIAL_STATE, actions) => {
  return produce(state, (draft) => {
    switch (actions.type) {
      case "LOAD_USER_DATA_REQUEST": {
        draft.loading = true;
        break;
      }
      case "LOAD_USER_DATA_SUCCESS": {
        draft.user = actions.payload.userData;
        draft.loading = false;
        break;
      }
      case "USER_CLEAR": {
        draft.user = {};
        break;
      }
      case "TOGGLE_PROFILE_OTHER_USER": {
        draft.otherUser = actions.payload.status;
        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default user;
