import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-gold p-4 shadow-md flex justify-between">
      <h1 className="text-xl font-bold">Black Stars</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/fixtures">Fixtures</Link>
        <Link to="/players">Players</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;
