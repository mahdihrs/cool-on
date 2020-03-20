import Service from '../../services';

export function fetchUsers(q) {
  return (dispatch) => {
    Service.get(`/search/users?q=${q}`)
    .then(({ data }) => {
      dispatch({
        type: 'USERS_FETCHED',
        payload: {
          data: data.items,
          key: q
        }
      })
    })
    .catch(error => {
      console.log(`ERROR on fetching users: ${JSON.stringify(error.response.data.message)}`)
    })
  }
}

export function userDetail(username) {
  return (dispatch) => {
    Service.get(`/users/${username}`)
    .then(({ data }) => {
      dispatch({
        type: 'GET_USER_DETAIL',
        payload: data
      })
      return Service.get(`/users/${username}/orgs`)
    })
    .then(({ data }) => {
      dispatch({
        type: 'GET_USER_ORGS',
        payload: data
      })
    })
    .catch(error => {
      console.log(`ERROR on fetching detail: ${error.response.data.message}`);
    })
  }
}

export function clearDetail() {
  return (dispatch) => {
    dispatch({
      type: 'RESET_DETAIL'
    })
  }
}

export function clearUsersFound() {
  return (dispatch) => {
    dispatch({
      type: 'RESET_USERS_FOUND'
    })
  }
}
