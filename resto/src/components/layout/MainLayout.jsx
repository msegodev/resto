import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import background from "../../assets/bg.svg";

const Layout = () => {
  return (
    <Flex>
      <Sidebar />

      {/* MAIN LAYOUT */}
      <Box flex="1" bgImage={background} bgSize={"auto"} bgColor={"#eee"}>
        <Navbar />
        <Flex justify={"center"}>
          <Box px={4} w={"7xl"} py={10}>
            {/* NESTED ROUTES */}
            <Outlet />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Layout;
