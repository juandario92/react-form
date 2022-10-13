import "./app.css";
import FormInput from "./components/FormInput";

const App = () => {
  return <div className="app">
          <form>
            <FormInput label="Nombre de Usuario" placeholder="Johndoe2022"/>
            <FormInput label="E-mail" placeholder="johndoe@gmail.com"/>
            <FormInput label="Nombre Completo" placeholder="John Doe"/>
            <FormInput placeholder="Sth else"/>
          </form>
  </div>;
};


export default App;
