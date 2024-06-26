'use server'
import { revalidatePath } from 'next/cache'
import db from './db'

export  const completeTodo=async (id)=>{
  await db.todo.update({
    where:{id},
    data:{
      completed:true,
    },
  })
  revalidatePath('/todos')
}
export const newTodo = async (formData) => {
  const newTodo = await db.todo.create({
    data:{
        content:formData.get('content'),
    },
  })

  revalidatePath('/todos');
    //build-in function for soft refresh the page ,will not do any redirecting but
    // clean the cache out of path

}