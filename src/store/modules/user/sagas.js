import { all, takeLatest, call, put } from "redux-saga/effects";
import apiGithub from "../../../services/apiGithub";
import * as NavigationService from "../../../services/navigationService";
import { loadUserDataFailure, loadUserDataSuccess, userClear } from "./actions";
import { toastError } from "../../../components/Toast";

function* singInUser({ payload }) {
  const { nickname } = payload;

  try {
    const signInUserResponse = yield call(apiGithub.get, `users/${nickname}`);

    const { data } = signInUserResponse;

    yield put(loadUserDataSuccess(data));
    NavigationService.navigate("TabBar");
  } catch (error) {
    yield put(loadUserDataFailure());
    toastError("Ocorreu algo de errado, tente novamente.");
  }
}

function* singInNewUser({ payload }) {
  const { nickname } = payload;
  try {
    const signInUserResponse = yield call(apiGithub.get, `users/${nickname}`);

    const { data } = signInUserResponse;

    yield put(loadUserDataSuccess(data));
    NavigationService.navigate("Home");
  } catch (error) {
    yield put(loadUserDataFailure());
    toastError("Ocorreu algo de errado, tente novamente.");
  }
}

function* exit() {
  yield put(userClear());
  NavigationService.navigate("SignIn");
}

export default all([
  takeLatest("LOAD_USER_DATA_REQUEST", singInUser),
  takeLatest("LOAD_USER_NEW_DATA_REQUEST", singInNewUser),
  takeLatest("USER_LOGOUT", exit),
]);
