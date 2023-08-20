import { Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react"
import useGenres, { Genre } from "../hooks/useGenres"
import getCroppedImageUrl from "../services/Image-url"

interface Props {
  onSelectGenre: (genre: Genre) => void
  selectedGenre: Genre | null
}

const GenreList = ( { selectedGenre, onSelectGenre } : Props ) => {
  const { data, isLoading, error } = useGenres()

  if (isLoading) <Spinner/>
  if (error) return null

  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
    <List>
        {data.map(genre => <ListItem key={genre.id} paddingY='5px'>
          <HStack>
          <Image objectFit='cover' src={getCroppedImageUrl(genre.image_background)} alt={genre.name} boxSize='32px' borderRadius={8}/>
          <Button whiteSpace='normal' textAlign='left' fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal' } onClick={ () =>  onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
          </HStack>
        </ListItem>)}
    </List>
    </>
  )
}

export default GenreList