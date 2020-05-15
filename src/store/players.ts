
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
    name: 'Sam',
    group: 1,
    games: 0,
    points: 0
  },
  {
    id: 2,
    name: 'Ross',
    group: 1,
    games: 0,
    points: 0
  },
  {
    id: 3,
    name: 'Josh',
    group: 1,
    games: 0,
    points: 0
  },
  {
    id: 4,
    name: 'Drewy',
    group: 1,
    games: 0,
    points: 0
  },
  {
    id: 5,
    name: 'Bowden',
    group: 1,
    games: 0,
    points: 0
  },
  {
    id: 6,
    name: 'Yarwood',
    group: 2,
    games: 0,
    points: 0
  },
  {
    id: 7,
    name: 'Rowlands',
    group: 2,
    games: 0,
    points: 0
  },
  {
    id: 8,
    name: 'Harri',
    group: 2,
    games: 0,
    points: 0
  },
  {
    id: 9,
    name: 'Kyle',
    group: 2,
    games: 0,
    points: 0
  },
  {
    id: 10,
    name: 'Ahmed',
    group: 2,
    games: 0,
    points: 0
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