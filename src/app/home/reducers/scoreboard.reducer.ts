import {Game} from "./game.model";
import {createReducer, on} from "@ngrx/store";
import * as Actions from './scoreboard-page.actions';

export const initialState:Game={
  home:0,
  away:0
}
export const scoreboardReducer=createReducer(
  initialState,
  on(Actions.homeScore,state=>({...state,home:state.home+1})),
  on(Actions.awayScore,state=>({...state,away:state.away+1})),
  on(Actions.reset,state=>({home:0,away:0})),
  on(Actions.setScores,(state,{game})=>({home:game.home,away:game.away}))
);
