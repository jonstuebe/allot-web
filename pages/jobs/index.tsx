import { useCallback, useRef } from "react";
import NextLink from "next/link";
import * as Yup from "yup";
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
  Tooltip,
  Popover,
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

import { Link } from "../../components/Link";
import { Sidebar } from "../../components/Sidebar";
import { Content } from "../../components/Content";
import { RaisedSurface } from "../../components/RaisedSurface";
import { JobCard } from "../../components/JobCard";
import useLocalStorage from "@rehooks/local-storage";
import { Field, Form, Formik } from "formik";

import { payFrequency } from "../../components/JobCard";

export default function Jobs() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [jobs] = useLocalStorage("jobs", []);
  const companyFieldRef = useRef();

  const onSubmit = useCallback(() => {}, []);

  return (
    <Flex>
      <Sidebar />
      <Content>
        <Flex direction="row" justify="space-between" mb={4}>
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

        {jobs.length > 0 ? (
          <SimpleGrid columns={[1, 2, 3]}>
            {jobs.map((job, idx) => (
              <Link href={`/job/${job.id}`} key={idx}>
                <JobCard
                  company={job.company}
                  payFrequency={job.payFrequency}
                />
              </Link>
            ))}
          </SimpleGrid>
        ) : (
          <Center>
            <Text fontSize="xl" fontWeight="semibold">
              add a job to get started
            </Text>
          </Center>
        )}

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
                <Formik
                  initialValues={{
                    company: "",
                    payFrequency: "",
                  }}
                  validationSchema={Yup.object({
                    company: Yup.string().required(
                      "enter the company you work for"
                    ),
                    payFrequency: Yup.string()
                      .oneOf(payFrequency)
                      .required("enter the pay frequency"),
                  })}
                  onSubmit={onSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <Box flex={1}>
                        <Stack spacing={4}>
                          <Field name="company">
                            {({ field, form }) => (
                              <FormControl
                                isInvalid={
                                  form.errors.company && form.touched.company
                                }
                              >
                                <FormLabel htmlFor="company">Company</FormLabel>
                                <Input
                                  {...field}
                                  id="company"
                                  ref={companyFieldRef}
                                />
                                <FormErrorMessage>
                                  {form.errors.company}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                          <Field name="payFrequency">
                            {({ field, form }) => (
                              <FormControl
                                isInvalid={
                                  form.errors.payFrequency &&
                                  form.touched.payFrequency
                                }
                              >
                                <FormLabel htmlFor="payFrequency">
                                  How often do you get paid?
                                </FormLabel>
                                <RadioGroup {...field}>
                                  <Stack direction="column">
                                    <Radio value="weekly">weekly</Radio>
                                    <Radio value="bi_weekly">
                                      every two weeks
                                    </Radio>
                                    <Radio value="bi_monthly">
                                      twice a month
                                    </Radio>
                                  </Stack>
                                </RadioGroup>
                                <FormErrorMessage>
                                  {form.errors.payFrequency}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                          <Button
                            variant="solid"
                            colorScheme="blue"
                            type="submit"
                            isLoading={isSubmitting}
                          >
                            Save
                          </Button>
                        </Stack>
                      </Box>
                    </Form>
                  )}
                </Formik>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Content>
    </Flex>
  );
}
