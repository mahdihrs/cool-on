const defaultState = {
  usersFetched: [],
  userDetail: {
    loading: true,
    detail: {}
  },
  userOrg: {
    loading: true,
    orgs: []
  },
  loading: true,
  usersFetchedCalled: false
}

export default function githubUsers(state = defaultState, action) {
  const { type, payload } = action;

  switch(type) {
    case 'USERS_FETCHED': 
      return{
        ...state,
        loading: false,
        usersFetchedCalled: true,
        usersFetched: payload
      }
    case 'GET_USER_DETAIL':
      return {
        ...state,
        userDetail: {
          loading: false,
          detail: payload
        }
      }
    case 'GET_USER_ORGS':
      return {
        ...state,
        userOrg: {
          loading: false,
          orgs: payload
        }
      }
    case 'RESET_DETAIL':
      return {
        ...state,
        userDetail: {
          loading: true,
          detail: {}
        },
        userOrg: {
          loading: true,
          orgs: []
        }
      }
    default:
      return state
  }  
}
