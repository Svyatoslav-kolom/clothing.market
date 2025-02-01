import { Header } from "./components/Organisms/Header";
import "./App.css";
import { Footer } from "./components/Organisms/Footer";
import { MenuDrawer } from "./components/Organisms/SideMenu";
import { Box, useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box w="100vw">
        <Header isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <MenuDrawer isOpen={isOpen} onClose={onClose} />
        <Outlet />
        <Footer />
      </Box>
    </>

  );
}
