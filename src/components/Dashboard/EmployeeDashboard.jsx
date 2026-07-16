import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <>
      <Header />
      <TaskListNumbers />
      <TaskList/>
    </>
  );
};

export default EmployeeDashboard;