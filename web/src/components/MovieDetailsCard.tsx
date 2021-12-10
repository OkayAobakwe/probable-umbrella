import { 
  Flex, 
  Box, 
  Image, 
  Stack, 
  Heading,
  Text
} from "@chakra-ui/react"

import { MovieProps } from "../types"
import { imageUrl } from "../utils/imageUrl"

export const MovieDetailsCard = (props: MovieProps) => {
  return(
    <Box mt={14} ml={8}>
      <Flex wrap="wrap">
        <Image 
          src={`${imageUrl}${props.image}`}
          width={300}
        />
        <Stack ml={3}>
          <Flex justifyContent="row">
            <Heading>{props.original_title}</Heading>
            <Text mt={3} ml={5}>({props.release_date?.slice(0,4)})</Text>
          </Flex>
          <Text>{props.tagline}</Text>
          <Text>{props.vote_average}</Text>
          <Text textStyle="bold">Overview</Text>
          <Text>{props.overview}</Text>
          <Text textStyle="bold">Genres</Text>
          <Flex justifyContent="row">
            {props.genres?.map((genre) => (
              <Text key={genre.id} mr={3}>{genre.name}</Text>
            ))}
          </Flex>
        </Stack>
      </Flex>
    </Box>
  )
}