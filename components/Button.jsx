import React from 'react'

export default function Button(props) {
    const { text, outline = false, full } = props;

    return (
        <button className={`btn btn-primary ${outline ? 'btn-outline': ''} ${full ? 'grid place-items-center w-full' : ''}`}>{text}</button>
    )
}
