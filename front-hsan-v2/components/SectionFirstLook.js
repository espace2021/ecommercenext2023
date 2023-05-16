import React from 'react'

const SectionFirstLook = ({image,title}) => {
  return (
    <div>
      <section className="first-look">
<h2>{title}</h2>
<div className="first-look-container">
<Image
src={image}
alt={title}
fill
style={{objectFit:"cover"}}
/>
</div>
</section>
    </div>
  )
}

export default SectionFirstLook
