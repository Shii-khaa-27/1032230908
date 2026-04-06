import AddStudent from './components/AddStudent';
import ViewStudents from './components/ViewStudents';
import './index.css';

function App() {
  return (
    <div className="wrapper">

      <div className="title-bar">
        Student Portfolio 🌙
      </div>

      <AddStudent />
      <ViewStudents />

    </div>
  );
}

export default App;