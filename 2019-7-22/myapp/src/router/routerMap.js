import {Route} from "react-router-dom";
import React from 'react';
import RouterGuard from './shouwei';

const renderRoutesMap = (routes) => (
    routes.map((item,i)=>{
        return (<Route
            {...{
                key:i,
                render:(props)=>{
                    return  <RouterGuard {...item} {...props}/>    
                },
                path:item.path,
                exact:item.exact || false
            }}
        />)
    })
)

export default renderRoutesMap
