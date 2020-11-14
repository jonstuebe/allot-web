import { Box, Heading, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import { RaisedSurface } from "./RaisedSurface";
import { useMemo } from "react";

export const payFrequency = ["weekly", "bi_weekly", "bi_monthly"] as const;
export type PayFrequency = typeof payFrequency[number];

export interface JobCardProps {
  company: string;
  payFrequency: PayFrequency;
}

export function JobCard({ company, payFrequency }: JobCardProps) {
  const frequency = useMemo(() => {
    switch (payFrequency) {
      case "bi_weekly":
        return "every two weeks";
      case "bi_monthly":
        return "twice a month";
      default:
        break;
    }
  }, [payFrequency]);

  return (
    <RaisedSurface
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
    >
      <Box>
        <Heading as="h4" fontSize="2xl" fontWeight="semibold" mb={-1}>
          {company}
        </Heading>
        <Text fontSize="sm" mb={2}>
          {frequency}
        </Text>
      </Box>
      <ChevronRightIcon w={8} h={8} />
    </RaisedSurface>
  );
}
