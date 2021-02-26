export function loadUserDataRequest(nickname) {
  return {
    type: "LOAD_USER_DATA_REQUEST",
    payload: {
      nickname,
    },
  };
}

export function loadUserNewDataRequest(nickname) {
  return {
    type: "LOAD_USER_NEW_DATA_REQUEST",
    payload: {
      nickname,
    },
  };
}

export function loadUserDataSuccess(userData) {
  return {
    type: "LOAD_USER_DATA_SUCCESS",
    payload: {
      userData,
    },
  };
}

export function loadUserDataFailure() {
  return {
    type: "LOAD_USER_DATA_FAILURE",
  };
}
export function toggleProfileOtherUser(status) {
  return {
    type: "TOGGLE_PROFILE_OTHER_USER",
    payload: {
      status: status,
    },
  };
}
export function userLogout() {
  return {
    type: "USER_LOGOUT",
  };
}

export function userClear() {
  return {
    type: "USER_CLEAR",
  };
}
