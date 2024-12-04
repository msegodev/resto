import { Flex, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Tabs = ({ sections }) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);
        if (
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveTab(index);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Flex
      position="sticky"
      top="60px" // Asegúrate de calcular el espacio del header
      bg="gray.800"
      zIndex="docked"
      p={2}
      gap={4}
      justifyContent="center"
    >
      {sections.map((section, index) => (
        <Button
          key={section.id}
          colorScheme={activeTab === index ? "orange" : "gray"}
          onClick={() => scrollToSection(section.id)}
        >
          {section.label}
        </Button>
      ))}
    </Flex>
  );
};

export default Tabs;
