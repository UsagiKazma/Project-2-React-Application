import React from 'react'
import {useState} from 'react'

const Monster = (props) =>{

    const [monsterData,setmonsterData] = useState([]);

    if(props? true: false){
        const filteredMonsters = props.monsters.filter((monster)=>monster.name === props.match.params.name)[0]
    
              const weakness = filteredMonsters && filteredMonsters.weaknesses.map(
                  (weakness)=>{
                      if(weakness.stars >= 2){
                      return <h4>{weakness.element + ': '}{ weakness.stars}</h4>
                      }
                  }
              )

              const location = filteredMonsters && filteredMonsters.locations.map(
                  (location)=>{

                      return(
                         <div className='locations'>
                           <h4>{location.name}</h4>
                           <h4>{'Zone Area: '+location.zoneCount}</h4>
                         </div>
                      )
                  }
              )

              let nameCheck = filteredMonsters && filteredMonsters.name.replace(' ', '_')
              const monsterIcon = require(`../monsters/${nameCheck}.png`)

            return(
            <div className='monsterInfo'>
                   <img className='MonsterImages' alt='Image Here' src={monsterIcon} />
                   <h2 className='monsterName'>{filteredMonsters && filteredMonsters.name}</h2>
            <div className='description'>
                    <p>{filteredMonsters && filteredMonsters.description}</p>
                </div>
            <div className='location'>
                     <h4>{location}</h4>
                </div>
            <div className='weak'>
                     <h3>Weakness</h3>
                     <h4>{weakness}</h4>
                </div>
            </div>
            )
           
    }else{
        return(
            <h1>LOOOOOADING</h1>
        )
    }


}

export default Monster