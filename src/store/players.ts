
interface playerType {
  id: number,
  name: string,
  group: number,
  games?: number,
  points?: number
}

const initialState = [
  {
    id: 1,
    name: 'Sid - PSG',
    group: 1,
    games: 4,
    wins: 1,
    draws: 0,
    losses: 3,
    gf: 4,
    ga: 17,
    points: 3
  },
  {
    id: 2,
    name: 'Kyle - Man City',
    group: 2,
    games: 4,
    wins: 1,
    draws: 0,
    losses: 3,
    gf: 7,
    ga: 8,
    points: 3
  },
  {
    id: 3,
    name: 'Ross - Spurs',
    group: 1,
    games: 4,
    wins: 4,
    draws: 0,
    losses: 0,
    gf: 16,
    ga: 3,
    points: 12
  },
  {
    id: 4,
    name: 'Ahmed - Bayern',
    group: 2,
    games: 4,
    wins: 1,
    draws: 0,
    losses: 3,
    gf: 8,
    ga: 18,
    points: 3
  },
  {
    id: 5,
    name: 'Bowden - Real Madrid',
    group: 1,
    games: 4,
    wins: 1,
    draws: 0,
    losses: 3,
    gf: 8,
    ga: 19,
    points: 3
  },
  {
    id: 6,
    name: 'Rowlands - Dortmund',
    group: 2,
    games: 4,
    wins: 2,
    draws: 0,
    losses: 2,
    gf: 11,
    ga: 13,
    points: 6
  },
  {
    id: 7,
    name: 'Harri - Man Utd',
    group: 1,
    games: 4,
    wins: 2,
    draws: 0,
    losses: 2,
    gf: 13,
    ga: 10,
    points: 6
  },
  {
    id: 8,
    name: 'Drewy - Barca',
    group: 2,
    games: 4,
    wins: 3,
    draws: 0,
    losses: 1,
    gf: 21,
    ga: 8,
    points: 9
  },
  {
    id: 9,
    name: 'Yarwood - Juve',
    group: 1,
    games: 4,
    wins: 2,
    draws: 0,
    losses: 2,
    gf: 14,
    ga: 7,
    points: 6
  },
  {
    id: 10,
    name: 'Josh J - Liverpool',
    group: 2,
    games: 4,
    wins: 3,
    draws: 0,
    losses: 1,
    gf: 10,
    ga: 8,
    points: 9
  }
]

export const editPlayer = (player:playerType[]) => ({
  type: 'EDIT_GROUP',
  players: players
})

export const players = (state=initialState, action: any) => {

  switch(action.type) {
    case 'EDIT_GROUP':
      console.log(action.players)
      return Object.assign([], state, {group: action.players.group})

    default:
      return state;

  }

}