import { ReactNode } from 'react';
import {
  Box,
  Stack,
  Text,
  Heading,
  Flex,
  Image,
  useBreakpointValue
} from '@chakra-ui/react'

interface BannerContainerProps {
  bgImage: string;
  bgSize: string;
  bgPosition?: string;
  heigh: string;
  children: ReactNode;
}

export function BannerContainer({
  bgImage,
  bgSize,
  bgPosition = 'center',
  heigh,
  children
}: BannerContainerProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Flex
      direction='row'
      width='100%'
      height={heigh}
      bgImage={bgImage}
      bgRepeat='no-repeat'
      bgSize={bgSize}
      bgPosition={bgPosition}
      justify='space-evenly'
      mb={['14', '28']}
    >
      {children}
    </Flex>
  )
}