import './App.css';
import Enrollment from './components/Enrollment/Enrollment';
import FormikContainer from './components/FormikContainer';
import LoginForm from './components/Login/LoginForm';
import RegisterationForm from './components/Login/RegisterationForm';

function App() {
  return (
    <div className="App">
      {/* <FormikContainer /> */}
      {/* <LoginForm /> */}
      {/* <RegisterationForm/> */}
      <Enrollment/>
    </div>
  );
}

export default App;
