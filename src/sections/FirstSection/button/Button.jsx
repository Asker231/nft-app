import React from 'react'

const Button = ({title,fs,v,h}) => {
  return <button style={{background:"#532C59",color:"white",border:"none",fontSize:`${fs}px`,padding:`${v}px ${h}px`,borderRadius:"20px",cursor:'pointer'}}>{title}</button>
}

export default Button