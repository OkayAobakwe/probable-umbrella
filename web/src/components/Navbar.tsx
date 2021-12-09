import NextLink from "next/link"
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import { DarkModeSwitch } from "./DarkModeSwitch"

const LinkItem = ({ href, path, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha900")
  return(
    <NextLink href={href}>
      <Link 
        p={2}
        bg={active ? "glassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  return(
    <Box
      position="fixed"
      as="nav"
      w="100%"
      top={0}
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{backdropFilter: "blur(10px"}}
      zIndex={1}
      {...props}
      >
        <Container display="flex" p={2} maxW="contaier.md" wrap="wrap" align="space-between">
          <Flex align="center" mr={5}>
            <Heading as="h1" size="lg" letterSpacing={"tighter"}>
              Awesome Movies
            </Heading>
          </Flex>
          <Stack 
            direction={{base: "column", md: "row"}}
            display={{base: "none", md: "flex"}}
            width={{base: "full", md: "auto"}}
            alignItems="center"
            flexGrow={1}
            mt={{base: 4, nmd: 0}}>
              <LinkItem href="/popular-movies" path={path}>Popular Movies</LinkItem>
              <LinkItem href="/about" path={path}>About the developer</LinkItem>
          </Stack>
          <Box flex={1} align="right">
            <DarkModeSwitch />
            <Box ml={2} display={{base: "inline-block", md: "none"}}>
              <Menu>
                <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options"/>
                <MenuList>
                  <NextLink href="/popular-movies" passHref>
                    <MenuItem as={Link}>Popular Movies</MenuItem>
                  </NextLink>
                  <NextLink href="/about" passHref>
                    <MenuItem as={Link}>About the developer</MenuItem>
                  </NextLink>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Container>
      </Box>
  )
}
export default Navbar