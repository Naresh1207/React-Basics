import React from 'react'

function HeroError({heroName}) {
    console.log(heroName)
    if(heroName=== 'Joker'){
        console.log(',,,')
        throw new Error('Not a hero')
        // console.log(szdsz)
    }
   return (
    <div>
      {heroName}
    </div>
  )
}

export default HeroError
