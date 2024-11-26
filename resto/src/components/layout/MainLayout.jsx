import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import background from "../../assets/bg.svg"

const Layout = () => {
  return (
    <Flex>
      <Sidebar />

      {/* MAIN LAYOUT */}
      <Box flex="1" bgImage={background} bgSize={"auto"} bgColor={"lavender"}>
        <Navbar />
        <Box p={4}>
          {/* NESTED ROUTES */}
          <Outlet />
        </Box>
      </Box>
    </Flex>
  );
};

export default Layout;
