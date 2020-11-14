import NextLink, { LinkProps as NextLinkProps } from "next/link";
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";

export interface LinkProps
  extends Omit<NextLinkProps, "passHref">,
    Omit<ChakraLinkProps, "href" | "to" | "as"> {
  children: React.ReactNode;
}

export function Link({
  children,
  href,
  as,
  prefetch,
  replace,
  scroll,
  shallow,
  ...chakraProps
}: LinkProps) {
  return (
    <NextLink
      href={href}
      as={as}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref
    >
      <ChakraLink {...chakraProps} as="a">
        {children}
      </ChakraLink>
    </NextLink>
  );
}
