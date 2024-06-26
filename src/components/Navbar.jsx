import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";


const Navbar = () => {
  const logo = "https://i.ibb.co/s9Qys2j/logo.png";

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        p={2}
        sx={{
          position: "sticky",
          background: "#000",
          top: 0,
          justifyContent: "space-between",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" height={45} />
        </Link>
        <SearchBar />
      </Stack>
    </>
  );
};

export default Navbar;
