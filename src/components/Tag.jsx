import React from 'react'
import "./Tag.css"

const Tag = ({tagName, selectTag, selected}) => {
  const tagStyle = {
    Work: {backgroundColor: "#fda821"},
    Personal: {backgroundColor: "#15d4c8"},
    Study: {backgroundColor: "#ffd12c"},
    Health: {backgroundColor: "#4cdafc"},
    Others: {backgroundColor: "#f9f9f9"}
  }
  return (
    <button 
      type="button" 
      className="tag"
      style={selected? tagStyle[tagName]:tagStyle.default} 
      onClick={() => selectTag(tagName)}>{tagName}</button>
  )
}

export default Tag