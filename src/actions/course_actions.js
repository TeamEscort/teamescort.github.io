import {
    ASK_QUERY_SUCCESSS,
    ASK_QUERY_FAILED,
} from './index';

import userApi from "../userAuth"

export const askQuery = (msg, setLoad) => async (dispatch) => {
    return await userApi.post('/query', {"query": msg}).then((data) => {
        setLoad(false)
    dispatch({
        type: ASK_QUERY_SUCCESSS,
        payload: { queryDetail: data.data },
       });
    }).catch((err) => {
        dispatch({
            type: ASK_QUERY_FAILED,
        });
    });

}

