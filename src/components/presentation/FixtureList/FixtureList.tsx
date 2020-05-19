import React from 'react'

import { FixtureCard } from './FixtureCard'

import './Fixtures.scss'

export interface FixtureListProps {
  fixtures: any
}

export const FixtureList:React.FC<FixtureListProps> = ({fixtures}) => {
  
  // const matchdayOne = fixtures.filter((item: any) => {return item.matchday==1})
  // const matchdayTwo = fixtures.filter((item: any) => {return item.matchday==2})
  // const matchdayThree = fixtures.filter((item: any) => {return item.matchday==3})
  // const matchdayFour = fixtures.filter((item: any) => {return item.matchday==4})
  // const matchdayFive = fixtures.filter((item: any) => {return item.matchday==5})

  const groupA = fixtures.filter((item: any) => {return item.group===1})
  const groupB = fixtures.filter((item: any) => {return item.group===2})

  console.log(groupA)
  console.log(groupB)

  return (
    <div className="fixture-list">
      <h2>Fixtures</h2>
      <h4>Matchday 1</h4>
      <div className="fixture-list__row">
        {/* {matchdayOne.map(({playerOne, playerTwo}: any) => {
          return (<FixtureCard playerOne={playerOne} playerTwo={playerTwo}/>)
        })
        } */}
        <FixtureCard playerOne={groupA[0].name} playerTwo={groupA[1].name}/>
        <FixtureCard playerOne={groupA[2].name} playerTwo={groupA[3].name}/>
        {/* <FixtureCard playerOne={groupA[5].name} playerTwo={groupA[4].name}/> */}
        <FixtureCard playerOne={groupB[0].name} playerTwo={groupB[1].name}/>
        <FixtureCard playerOne={groupB[2].name} playerTwo={groupB[3].name}/>
      </div>
      <h4>Matchday 2</h4>
      <div className="fixture-list__row">
        {/* {matchdayTwo.map(({playerOne, playerTwo}: any) => {
          return (<FixtureCard playerOne={playerOne} playerTwo={playerTwo}/>)
        })
        } */}
        <FixtureCard playerOne={groupA[0].name} playerTwo={groupA[4].name}/>
        <FixtureCard playerOne={groupA[1].name} playerTwo={groupA[3].name}/>
        {/* <FixtureCard playerOne={groupA[5].name} playerTwo={groupA[2].name}/> */}
        <FixtureCard playerOne={groupB[0].name} playerTwo={groupB[2].name}/>
        <FixtureCard playerOne={groupB[1].name} playerTwo={groupB[4].name}/>
      </div>
      <h4>Matchday 3</h4>
      <div className="fixture-list__row">
        {/* {matchdayThree.map(({playerOne, playerTwo}: any) => {
          return (<FixtureCard playerOne={playerOne} playerTwo={playerTwo}/>)
        })
        } */}
        <FixtureCard playerOne={groupA[3].name} playerTwo={groupA[4].name}/>
        <FixtureCard playerOne={groupA[1].name} playerTwo={groupA[2].name}/>
        {/* <FixtureCard playerOne={groupA[0].name} playerTwo={groupA[5].name}/> */}
        <FixtureCard playerOne={groupB[3].name} playerTwo={groupB[4].name}/>
        <FixtureCard playerOne={groupB[1].name} playerTwo={groupB[2].name}/>
      </div>
      <h4>Matchday 4</h4>
      <div className="fixture-list__row">
        {/* {matchdayFour.map(({playerOne, playerTwo}: any) => {
          return (<FixtureCard playerOne={playerOne} playerTwo={playerTwo}/>)
        })
        } */}
        <FixtureCard playerOne={groupA[0].name} playerTwo={groupA[3].name}/>
        <FixtureCard playerOne={groupA[4].name} playerTwo={groupA[2].name}/>
        {/* <FixtureCard playerOne={groupA[1].name} playerTwo={groupA[5].name}/> */}
        <FixtureCard playerOne={groupB[0].name} playerTwo={groupB[3].name}/>
        <FixtureCard playerOne={groupB[4].name} playerTwo={groupB[2].name}/>
      </div>
      <h4>Matchday 5</h4>
      <div className="fixture-list__row">
        {/* {matchdayFive.map(({playerOne, playerTwo}: any) => {
          return (<FixtureCard playerOne={playerOne} playerTwo={playerTwo}/>)
        })
        } */}
        <FixtureCard playerOne={groupA[4].name} playerTwo={groupA[1].name}/>
        <FixtureCard playerOne={groupA[2].name} playerTwo={groupA[0].name}/>
        {/* <FixtureCard playerOne={groupA[5].name} playerTwo={groupA[3].name}/> */}
        <FixtureCard playerOne={groupB[3].name} playerTwo={groupB[1].name}/>
        <FixtureCard playerOne={groupB[4].name} playerTwo={groupB[0].name}/>
      </div>

      <h3>Knockouts</h3>
  
      <h4>Semis</h4>
      <div className="fixture-list__row">
        <FixtureCard playerOne="Ross - Spurs" playerTwo="Josh J - Liverpool"/>
        <FixtureCard playerOne="Drewy - Barca" playerTwo="Yarwood - Juve"/>
      </div>
      <div className="fixture-list__row">
      <h4>Finals</h4>
      <FixtureCard playerOne="Semi AB Winner" playerTwo="Semi BA Winner"/>
      </div>
    </div>
  )
}