import { 
  Flex, 
  Box, 
  Image, 
  Stack, 
  Heading,
  Text
} from "@chakra-ui/react"

import OrderForm from "./OrderForm"

import { MovieProps } from "../types"
import { imageUrl } from "../utils/imageUrl"

export const MovieDetailsCard = (props: MovieProps) => {
  return(
    <Box mt={14} ml={8}>
      <Flex wrap="wrap">
        <Image 
          src={`${imageUrl}${props.image}`}
          width={300}
          height={400}
        />
        <Stack ml={3}>
          <Flex justifyContent="row">
            <Heading>{props.original_title}</Heading>
            <Text mt={3} ml={5}>({props.release_date?.slice(0,4)})</Text>
          </Flex>
          <Text>{props.tagline}</Text>
          <Text>{props.vote_average}</Text>
          <Text fontSize="2xl">Overview</Text>
          <Text>{props.overview}</Text>
          <Text fontSize="2xl">Genres</Text>
          <Flex justifyContent="row">
            {props.genres?.map((genre) => (
              <Text key={genre.id} mr={3}>{genre.name}</Text>
            ))}
          </Flex>
          <Box mt={9}>
            <OrderForm />
          </Box>
        </Stack>
      </Flex>
    </Box>
  )
}