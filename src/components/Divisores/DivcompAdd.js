import React from 'react'

export function DivcompAdd(props) {
    return (
        <div className={props.clase}>
            {props.children}
        </div>
    )
}