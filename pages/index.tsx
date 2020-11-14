import { Flex, Heading } from "@chakra-ui/react";

import { Sidebar } from "../components/Sidebar";
import { Content } from "../components/Content";

export default function Dashboard() {
  return (
    <Flex>
      <Sidebar />
      <Content>
        <Flex direction="row" justify="space-between" mb={4}>
          <Heading mb={4}>Dashboard</Heading>
        </Flex>
      </Content>
    </Flex>
  );
}
