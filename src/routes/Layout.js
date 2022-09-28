import { Flex, View } from "@aws-amplify/ui-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../index.css";

function Layout() {
  return (
    <View margin="1rem">
      <Flex as="nav" style={{ marginBottom: "2rem" }}>
        <Link to="/">Home</Link> | <Link to="me">My Account</Link> |{" "}
        <Link to="admin">Admin</Link>
      </Flex>
      <main>
        <Outlet />
      </main>
    </View>
  );
}

export default Layout;
