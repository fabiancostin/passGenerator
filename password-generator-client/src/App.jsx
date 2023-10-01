import "./App.css";
import Title from "./Components/Title/Title.component";
import GeneratedPassword from "./Components/GeneratedPassword/GeneratedPassword.component";
import PasswordSettings from "./Components/PasswordSettings/PasswordSettings.component";

function App() {
  return (
    <>
      <div className="bg-black min-h-screen flex justify-center items-center flex-col">
        <Title from="password generator" to="p*s*w*rd g*n*r*t*r" />
        <GeneratedPassword />
        <PasswordSettings />
        <p className="text-white text-sm mt-3 select-none">
          &copy; Fabian Ghena
        </p>
      </div>
    </>
  );
}

export default App;