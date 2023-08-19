import { Badge } from '@chakra-ui/react';

interface Props {
    score: number;
}

const CriticScore = ( { score } : Props ) => {
    const color = score > 70 ? 'green' : score > 50 ? 'yellow' : 'red'

  return (
    <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius={4}>{score}</Badge>
  )
}

export default CriticScore