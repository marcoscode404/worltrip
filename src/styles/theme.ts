import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,  
}


export const theme = extendTheme({
  config,
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  colors: {
    default: {
      'highlight': '#ffba08',
      'white': '#ffffff',
      'black': '#000000',
      'dark': {
        'text': '#47585b',
        'info': '#999999',
        'background': "#181b23",
      },
      'light': {
        'text': '#f5f8fa',
        'info': '#dadada',
        'background': '#f5f8fa',
      }
    }
  },
  styles: {
    global: (props) => {
      const prefix = props.colorMode === 'light' 
        ? ['light', 'dark']
        : ['dark', 'light'];
      return ({
        body: {
          bg: `default.${prefix[0]}.background`,
          color: `default.${prefix[1]}.text`,
        }
      })
    }
  }
})