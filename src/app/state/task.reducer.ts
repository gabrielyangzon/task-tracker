import { createReducer , on , Action } from "@ngrx/store";
import { Task  } from "../model/Task";
import * as TaskActions from '../state/task.actions'

const initialState : Task[] = []

const initialTask : Task = {
    day : "",
    reminder : false,
    text : "",
    id : ""
}

const _taskReducer = createReducer(
    initialState , 
    on(TaskActions.toggleTask , (state: Task[]  ) => 
    {
                return [initialTask]
    })
)

export function taskReducer(state : Task[]  = initialState , action :Action) {
    return _taskReducer(state , action)
}