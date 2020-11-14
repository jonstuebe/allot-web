import { ReactNode } from "react";
import { Flex, useColorModeValue } from "@chakra-ui/react";

export function Content({ children }: { children: ReactNode }) {
  const contentBg = useColorModeValue("gray.100", "gray.900");

  return (
    <Flex h="100vh" bg={contentBg} px={8} py={16} direction="column" flex={1}>
      {children}
    </Flex>
  );
}
