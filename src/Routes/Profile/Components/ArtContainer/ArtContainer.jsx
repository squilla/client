/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
// our model doesn't support a title tag, so i can't add an alt

import React from 'react'

import './artcontainer.css'

function ArtContainer({ props }) {
  const { art, onClick } = props
  console.log(art)
  const { url } = art

  return (
    <div className="single-art-container">
      <img src={url} className="single-art-image" onClick={onClick} />
    </div>
  )
}

export default ArtContainer
