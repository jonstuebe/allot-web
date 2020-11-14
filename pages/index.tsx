import { useRef } from "react";
import NextLink from "next/link";
import {
  Link as ChakraLink,
  Flex,
  Box,
  Heading,
  Stack,
  Text,
  Center,
  IconButton,
  useColorMode,
  useColorModeValue,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  SimpleGrid,
  StatLabel,
  Stat,
  StatHelpText,
  StatNumber,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  SettingsIcon,
  PlusSquareIcon,
  AddIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { Link } from "../components/Link";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const companyFieldRef = useRef();

  const contentBg = useColorModeValue("gray.100", "gray.900");
  const sidebarBg = useColorModeValue("white", "black");
  const cardBg = useColorModeValue("white", "black");

  return (
    <Flex>
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
              <Link href="/jobs" textAlign="center">
                Jobs
              </Link>
              <Link href="/bills" textAlign="center">
                Bills
              </Link>
            </Stack>
          </Stack>
        </Center>
        <Stack align="center" direction="column">
          <IconButton aria-label="Toggle Dark Mode" onClick={toggleColorMode}>
            {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          </IconButton>
          <IconButton aria-label="Settings">
            <SettingsIcon />
          </IconButton>
        </Stack>
      </Flex>
      <Flex h="100vh" bg={contentBg} px={8} py={16} direction="column" flex={1}>
        <Flex direction="row" justify="space-between">
          <Heading mb={4}>Jobs</Heading>
          <IconButton
            aria-label="add a job"
            variant="solid"
            colorScheme="blue"
            onClick={onOpen}
          >
            <AddIcon />
          </IconButton>
        </Flex>
        <SimpleGrid columns={[1, 2, 3]}>
          <Link href="/job/1">
            <Box
              bg={cardBg}
              rounded="lg"
              px={4}
              py={4}
              boxShadow="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexDirection="row"
            >
              <Box>
                <Heading as="h4" fontSize="2xl" fontWeight="semibold" mb={-1}>
                  SmartRent
                </Heading>
                <Text fontSize="sm" mb={2}>
                  twice a month
                </Text>
              </Box>

              <ChevronRightIcon w={8} h={8} />
            </Box>
          </Link>
        </SimpleGrid>

        {/* <Stack spacing={4}>
          <Box bg={cardBg} rounded="lg" p={4} boxShadow="lg">
            <Center>
              <Text fontSize="md">add a job to get started</Text>
            </Center>
          </Box>
        </Stack> */}

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          initialFocusRef={companyFieldRef}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth="1px">
                <Heading as="h3" size="lg">
                  Add Job
                </Heading>
              </DrawerHeader>
              <DrawerBody
                pt={4}
                pb={6}
                display={"flex"}
                flexDirection="column"
                justifyContent="space-between"
              >
                <Box flex={1}>
                  <Stack spacing={4}>
                    <FormControl id="company">
                      <FormLabel>Company</FormLabel>
                      <Input ref={companyFieldRef} />
                    </FormControl>
                    <FormControl id="payFrequency">
                      <FormLabel>How often do you get paid?</FormLabel>
                      <RadioGroup onChange={() => {}} value={"bi_monthly"}>
                        <Stack direction="column">
                          <Radio value="weekly">weekly</Radio>
                          <Radio value="bi_weekly">every two weeks</Radio>
                          <Radio value="bi_monthly">twice a month</Radio>
                        </Stack>
                      </RadioGroup>
                    </FormControl>
                  </Stack>
                </Box>
                <Button variant="solid" colorScheme="blue">
                  Save
                </Button>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
    </Flex>
  );
}
