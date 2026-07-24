import React from 'react'

function HeroHeading() {
  return (
    <div>
            {/* Title */}
      <h1 className="mt-5 max-w-4xl text-5xl leading-[1.15] font-extrabold tracking-tight text-(--color-text)">
        تجربة حقيقية
       
        تقييم صادق..
        <br />
        <span className="text-(--color-accent)">
          نحو تحسين مستمر
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-3xl text-[16px] leading-8 text-(--color-secondary-text)">
        منصة إعلامية مستقلة توثق التجارب والجولات داخل المملكة وخارجها
        <br />
        لتنقل لك التجربة كما هي، بموضوعية ومصداقية.
      </p>
    </div>
  )
}

export default HeroHeading