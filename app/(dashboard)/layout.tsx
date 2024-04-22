import NewTodoForm from "@/components/NewTodoForm"


const DashboardLayout = ({children}) => {
  return (
    <div>
        <h4>Dashboard-Layout</h4>
        <NewTodoForm/>
    <div>{children}</div>
    </div>
  )
}

export default DashboardLayout