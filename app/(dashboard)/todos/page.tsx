import TodoList from '@/components/TodoList'
import db from '@/utils/db'

const getData = async () => {
  await new Promise((resolve,reject) =>setTimeout(() => resolve(), 2000))
  const todos = await db.todo.findMany({})
console.log(todos)
  return todos
}

const TodosPage = async () => {
  const todos = await getData()
  return (
    <div>
        <h1>todos page</h1>
      <TodoList todos={todos} />
    </div>
  )
}

export default TodosPage