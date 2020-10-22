import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

import { authenicationPost } from '../services/api';
import { setUserAction } from '../action';

const Authenication = props =>{
    const history = useHistory()
    useEffect(() => {
        authenicationPost().then(data => {
            console.log(data);
            if (data === 10) {
                history.push('/login')
            } else {
               props.setUserAction(data)
            }
        }).catch(error => {
            history.push('/login')
        })
    }, []);
    return props.children

} 

export default connect(null,{setUserAction})(Authenication)