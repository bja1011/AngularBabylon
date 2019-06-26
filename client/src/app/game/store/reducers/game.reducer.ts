
import { GameActions, GameActionTypes } from '../actions/game.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: GameActions): State {
  switch (action.type) {

    case GameActionTypes.LoadGames:
      return state;

    default:
      return state;
  }
}
