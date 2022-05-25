import { useColorMode, Box, IconButton } from "@chakra-ui/react";
import { RiMoonLine, RiSunLine } from 'react-icons/ri'

export function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Alterar cores"
      icon={colorMode === 'light' ? <RiMoonLine /> : <RiSunLine />}
      onClick={toggleColorMode}
      variant='ghost'
      spacing='8'
      fontSize={['16', '32']}
      justify='center'
    />
  )
}