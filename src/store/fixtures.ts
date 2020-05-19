
interface fixtureType {
  id?: number,
  matchday: number,
  playerA: number,
  playerB: number
}

const initialState = [
  
]

export const addFixture = (fixture:any) => ({
  type: 'ADD_FIXTURE',
  fixture: fixture
})

export const fixtures = (state=[], action: any) => {

  switch(action.type) {
    case 'ADD_FIXTURE':
      return [...state, action.fixture]

    default:
      return state;

  }

}