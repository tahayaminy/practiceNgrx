import {createAction, props} from "@ngrx/store";
import {Game} from "./game.model";

export const homeScore=createAction('[Scoreboard Page] Home Score');
export const awayScore=createAction('[Scoreboard Page] Away Score');
export const reset=createAction('[Scoreboard Page] Score Reset');
export const setScores=createAction('[Scoreboard Page] Set Scores',props<{game:Game}>());
