import {Action , createAction , props} from '@ngrx/store'


enum ActionTypes {
    TOGGLE_TASK = "[Task] toggle"
}
export const toggleTask = createAction(ActionTypes.TOGGLE_TASK , props<{task : Task }>())