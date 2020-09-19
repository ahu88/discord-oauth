import React from "react";
import { Button, Flex, Box } from "@chakra-ui/core";
import "../styles.css";

export function LandingPage(props) {
  const login = () =>
    (window.location.href = "http://localhost:3001/api/auth/discord"); //redirect to express auth route, will store cookie on port 3000 page
  return (
    <div class="Aligner">
      <div class="centeredDiv">
        <Button onClick={login} variantColor="teal" size="lg" variant="outline">
          Login with Discord
        </Button>
      </div>
    </div>
  );
}
