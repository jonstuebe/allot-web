import {
  Flex,
  Heading,
  Stack,
  Center,
  IconButton,
  useColorMode,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, SettingsIcon } from "@chakra-ui/icons";

import { Link } from "../components/Link";

export function Sidebar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const sidebarBg = useColorModeValue("white", "black");

  return (
    <Flex
      minW={140}
      px={4}
      py={4}
      h="100vh"
      boxShadow="lg"
      bg={sidebarBg}
      direction="column"
      justify="space-between"
    >
      <Center flexDirection="column">
        <Stack>
          <Heading as="h2" size="lg" mb="4">
            Allot
          </Heading>
          <Stack spacing="2">
            <Link
              href="/jobs"
              fontSize="lg"
              _activeLink={{
                fontWeight: "semibold",
              }}
              textAlign="center"
            >
              Jobs
            </Link>
            <Link
              href="/bills"
              fontSize="lg"
              _activeLink={{
                fontWeight: "semibold",
              }}
              textAlign="center"
            >
              Bills
            </Link>
          </Stack>
        </Stack>
      </Center>
      <Center>
        <Stack direction="row">
          <Tooltip label="Toggle Dark Mode">
            <IconButton aria-label="Toggle Dark Mode" onClick={toggleColorMode}>
              {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            </IconButton>
          </Tooltip>
          <Tooltip label="Settings">
            <IconButton aria-label="Settings">
              <SettingsIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Center>
    </Flex>
  );
}
