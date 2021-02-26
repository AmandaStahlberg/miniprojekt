import React, { CSSProperties } from 'react';
import background from '../assets/background.png'
import chewbacca from '../assets/chewbacca.jpg'


function Content() {
    return (
        <div style={rootStyle}>
            <img style={bgStyle} src={background} alt=""/>
            <img style={imgStyle} src={chewbacca} alt=""/>
        </div>
    )
}

const rootStyle:CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
}

const imgStyle:CSSProperties = {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    borderRadius: 50,
    border: '.3rem solid yellow',
    height: '20rem'
}

const bgStyle:CSSProperties = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover'
}

export default Content;