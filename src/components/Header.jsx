import logo from "../assets/logo.png";
import { VscGithub } from "react-icons/vsc";
const Header = () => {
  return (
    <div className="flex items-center justify-around flex-wrap mt-8 mr-4">
      <div className="flex items-center gap-2">
        <a href="#"><img src={logo} alt="logo" className="h-9 w-9 " /></a>
        <h1 className="max-sm:hidden text-2xl font-bold font-mono">ColorsBucket</h1>
      </div>
      <div>
        <a href="https://github.com/NagarajPorandla" target="_blank"><VscGithub className="h-7 w-7 active:text-blue-900 hover:text-blue-950"/></a>
      </div>
    </div>
  );
};

export default Header;
