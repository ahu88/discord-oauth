//render page for MenuPage, decoupled from index.jsx in MenuPage
import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/core";

export function MenuComponent({ guilds }) {
  return (
    //dynamic rendering/iterate through guilds array
    <div>
      {guilds.map((guild) => (
        //add a component here to make it look nice
        <div>
          <Box
            maxW="sm"
            bg="gray.50"
            borderWidth="1px"
            rounded="lg"
            overflow="hidden"
            m={5}
          >
            {guild.name}
            <Box d="flex" alignItems="baseline">
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                <Link to={`/dashboard/${guild.id}`}>View Dashboard</Link>
              </Box>
            </Box>
          </Box>
          {/* <li>{guild.name}</li> */}
          {/* <Link to={`/dashboard/${guild.id}`}>View Dashboard</Link>  */}
        </div>
      ))}
    </div>
  );
}
