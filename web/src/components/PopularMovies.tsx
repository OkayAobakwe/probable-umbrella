import { FC } from "react"
import { 
  Box, 
  Center, 
  Image, 
  Stack, 
  Text,
  Link,
  LinkBox,
  LinkOverlay
} from "@chakra-ui/react"
import NextLink from "next/link"

import { imageUrl } from "../utils/imageUrl"
import { ThumbProps } from "../types/index"

const PopularMovieCard: FC<ThumbProps> = ({original_title, image, popularity, id}: ThumbProps) => {

  return (
    <Center ml={2} mt={4}>
      <Box
        w="full"
        mb={3}
      >
        <LinkBox cursor="pointer">
          <Box
            rounded={"lg"}
          >
            <Center>
              <Image 
                align={"center"}
                src={`${imageUrl}${image}`}
                height={"full"}
                width={300}
                objectFit={'cover'}
              />
            </Center>
          </Box>
          <Stack align={"center"} mt={5}>
              <Text m="auto">
                <NextLink href="/popular-movies/[id]" as={`/popular-movies/${id}`}>
                  <LinkOverlay>
                    {original_title}
                  </LinkOverlay>
                </NextLink>
              </Text>
          </Stack>
        </LinkBox>
      </Box>
    </Center>
  )
}

export default PopularMovieCard