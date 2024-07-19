/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    { id: 1, task: 'study NodeJS', completed: false },
    { id: 2, task: 'Practice React', completed: false },
    { id: 3, task: 'Do Leetcode', completed: false },
  ])
}
