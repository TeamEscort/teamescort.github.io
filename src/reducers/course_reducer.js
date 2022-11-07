import {
    ASK_QUERY_SUCCESSS,
    ASK_QUERY_FAILED
  } from "../actions/index";
    
  const initialState = { courseResults: [], courseDetail: [], similarCourseDetail: [], fieldsType: [], queryDetail: []};
  
  export const courseReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {

      case ASK_QUERY_SUCCESSS:
        return {
          ...state,
          queryDetail: payload.queryDetail,
        };
        case ASK_QUERY_FAILED:
          return {
            ...state,
            queryDetail: [],
        };

      default:
        return state;
    }
  }