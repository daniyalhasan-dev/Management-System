import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  return (
    <>
      <Header data= {data}/>
      <TaskListNumbers data= {data}/>
      <TaskList data= {data}/>
    </>
  );
};

export default EmployeeDashboard;