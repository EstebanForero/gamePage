import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react"
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
    <List>
        {data.map(genre => <ListItem key={genre.id} paddingY='5px'>
          <HStack>
          <Image src={getCroppedImageUrl(genre.image_background)} alt={genre.name} boxSize='32px' borderRadius={8}/>
          <Button fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal' } onClick={ () =>  onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
          </HStack>
        </ListItem>)}
    </List>
  )
}

export default GenreList