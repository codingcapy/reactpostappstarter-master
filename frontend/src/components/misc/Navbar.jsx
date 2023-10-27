import { NavLink } from "react-router-dom";
import useBoundStore from "../../store/Store";
import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from '@mantine/core';

const Navbar = () => {
  const { logoutService, user } = useBoundStore((state) => state);
  const onLogout = () => {
    logoutService();
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingInline: "40px",
        background: "#f3f3f3",
      }}
    >
      <NavLink to="/">
        <h3 style={{ color: "black" }}>LOGO</h3>
      </NavLink>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gridColumnGap: "40px",
        }}
      >
        <Button variant="default">
          <NavLink to="/">
            <h4 style={{ color: "white" }}>Home</h4>
          </NavLink>
        </Button>
        {!!user && (
          <NavLink to="posts">
            {" "}
            <h4>Posts</h4>
          </NavLink>
        )}
        {!!user ? (
          <Button variant="default">
            <h4 className="logout" onClick={onLogout}>
              Logout
            </h4>
          </Button>
        ) : (
          <Button>
            <NavLink to="login">
              <h4 style={{ color: "white" }}>Login</h4>
            </NavLink>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
