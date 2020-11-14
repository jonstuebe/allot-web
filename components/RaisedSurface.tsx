import { ReactNode } from "react";
import { Box, useColorModeValue, BoxProps } from "@chakra-ui/react";

export interface RaisedSurfaceProps extends BoxProps {
  children: ReactNode;
}

export function RaisedSurface({ children, ...props }: RaisedSurfaceProps) {
  const bg = useColorModeValue("white", "black");

  return (
    <Box {...props} bg={bg} rounded="lg" px={4} py={4} boxShadow="lg">
      {children}
    </Box>
  );
}
