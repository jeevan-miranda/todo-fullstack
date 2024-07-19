import { Task } from '../../models/tasks'
import connection from './connection'

export async function getAllTasks(): Promise<Task[]> {
  return await connection('tasks').select()
}

//getTaskById
export async function getTaskById(id: number): Promise<Task> {
  return await connection('tasks').where({ id }).first()
}

//addTask

//editTask

//deleteTask
