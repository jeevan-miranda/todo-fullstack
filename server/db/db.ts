import connection from './connection'

export async function getAllTasks(): Task[] {
  return await connection('tasks').select()
}
