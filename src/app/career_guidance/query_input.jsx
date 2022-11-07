import React, { useRef, useEffect } from 'react'
import { TextField, Button } from '@material-ui/core';
import { askQuery } from "../../actions/course_actions";
import { useDispatch, useSelector } from "react-redux";
import Grid from '@material-ui/core/Grid';
import ReactLoading from "react-loading";
import { useState } from 'react';

const QueryInput = () => {

    const queryRef = useRef('');
    const [load, setLoad] = useState(false)

    const dispatch = useDispatch();
    const { queryDetail } = useSelector(state => state.courseReducer);

    const onPress = () => {
        setLoad(true)
        dispatch(askQuery(queryRef.current.value, setLoad))
    }

    useEffect (() =>{

    },[dispatch])

  return (
    
    <div>

    <div style={{display: 'flex', justifyContent: 'center', alignItems:'center'}}>

            <TextField
                id='standard-basic'
                label='type your query....'
                placeholder='type your query....'
                variant='standard'
                inputRef={queryRef}
                style={{width: '64%'}}
                />   

            <Button
                    variant='contained'
                    color='primary'
                    size='large'
                    onClick={onPress}
                    >
                    Search
                </Button>

        </div>

            <Grid style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>

                { 
                    queryDetail.length !== 0 && !load?
                    <p style={{textAlign: 'center', margin: 25}}>{queryDetail[0]}</p>
                    : load ? <div style={{alignSelf: 'center'}}> <ReactLoading type={"bars"} color="#0036e8" /> </div>: null

                }

            </Grid>

    </div>

  )
}

export default QueryInput;
