/* eslint-disable jsx-a11y/alt-text */
// our schema doesn't support a title tag, so i can't add an alt

import React from 'react'

function ArtContainer({ props }) {
  const { art } = props
  const { url } = art
  return (
    <div className="single-art-container">
      <img src={url} className="single-art-image" />
    </div>
  )
}

export default ArtContainer
