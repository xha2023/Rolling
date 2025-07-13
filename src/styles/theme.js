const Theme = {
  colors: {
    //purple
    primary: {
      100: '#F8F0FF',
      200: '#ECD9FF',
      300: '#DCB9FF',
      400: '#C894FD',
      500: '#AB57FF',
      700: '#6E0AD1',
      800: '#861DEE',
      900: '#5603A7',
    },

    //Yellow
    secondary: {
      100: '#FFF0D6',
      200: '#FFE2AD',
      300: '#FFC583',
      400: '#FFAE65',
      500: '#FF8832',
    },
    //Blue
    blue: {
      100: '#E2F5FF',
      200: '#B1E4FF',
      300: '#7CD2FF',
      400: '#34B9FF',
      500: '#00A2FE',
    },
    //Green
    green: {
      100: '#E4FBDC',
      200: '#D0F5C3',
      300: '#9BE282',
      400: '#60CF37',
      500: '#2BA600',
    },
    gray: {
      100: '#F6F6F6',
      200: '#EEEEEE',
      300: '#CCCCCC',
      400: '#999999',
      500: '#555555',
      600: '#4A4A4A',
      700: '#3A3A3A',
      800: '#2B2B2B',
      900: '#181818',
    },
    white: '#FFFFFF',
    black: '#000000',
    error: '#DC3A3A',
    surface: '#F6F8FF',
  },
  fonts: {
    body: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
    heading:
      'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
    monospace: 'Fira Code, monospace',
  },
  fontSizes: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    smPlus: '0.9375rem', //15px
    md: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.75rem', // 28px
  },
  fontWeights: {
    thin: 100,
    extralight: 200,
    light: 300,
    normal: 400, // Regular
    medium: 500,
    semibold: 600,
    bold: 700, // Bold
    extrabold: 800,
    black: 900,
  },
  textStyles: {
    font28Bold: {
      fontFamily: 'body',
      fontSize: '3xl', // 28px
      fontWeight: 'bold', // Bold (700)
      lineHeight: 'normal',
      letterSpacing: '-0.01em',
    },
    font24Bold: {
      fontFamily: 'body',
      fontSize: '2xl', // 24px
      fontWeight: 'bold', // Bold (700)
      lineHeight: 'normal',
      letterSpacing: '-0.01em',
    },
    font24Regular: {
      fontFamily: 'body',
      fontSize: '2xl', // 24px
      fontWeight: 'normal', // Regular (400)
      lineHeight: 'normal',
      letterSpacing: '-0.01em',
    },
    font20Bold: {
      fontFamily: 'body',
      fontSize: 'xl', // 20px
      fontWeight: 'bold', // Bold (700)
      lineHeight: 'normal',
      letterSpacing: '-0.01em',
    },
    font20Regular: {
      fontFamily: 'body',
      fontSize: 'xl', // 20px
      fontWeight: 'normal', // Regular (400)
      lineHeight: 'normal',
      letterSpacing: '-0.01em',
    },
    font18Bold: {
      fontFamily: 'body',
      fontSize: 'lg', // 18px
      fontWeight: 'bold', // Bold (700)
      lineHeight: 'normal',
      letterSpacing: '-0.01em',
    },
    font18Regular: {
      fontFamily: 'body',
      fontSize: 'lg', // 18px
      fontWeight: 'normal', // Regular (400)
      lineHeight: 'normal',
      letterSpacing: '-0.01em',
    },
    font16Bold: {
      fontFamily: 'body',
      fontSize: 'md', // 16px
      fontWeight: 'bold', // Bold (700)
      lineHeight: 'normal',
    },
    font16Regular: {
      fontFamily: 'body',
      fontSize: 'md', // 16px
      fontWeight: 'normal', // Regular (400)
      lineHeight: 'normal',
      letterSpacing: '-0.01em',
    },
    font15Regular: {
      fontFamily: 'body',
      fontSize: 'smPlus', // 15px
      fontWeight: 'normal', // Regular (400)
      lineHeight: 'normal',
      letterSpacing: '-0.01em',
    },
    font15Bold: {
      fontFamily: 'body',
      fontSize: 'smPlus', // 15px
      fontWeight: 'bold', // Bold (700)
      lineHeight: 'normal',
      letterSpacing: '-0.01em',
    },
    font14Regular: {
      fontFamily: 'body',
      fontSize: 'sm', // 14px
      fontWeight: 'normal', // Regular (400)
      lineHeight: 'normal',
      letterSpacing: '-0.005em',
    },
    font14Bold: {
      fontFamily: 'body',
      fontSize: 'sm', // 14px
      fontWeight: 'bold', // Bold (700)
      lineHeight: 'normal',
      letterSpacing: '-0.005em',
    },
    font12Regular: {
      fontFamily: 'body',
      fontSize: 'xs', // 12px
      fontWeight: 'normal', // Regular (400)
      lineHeight: 'normal',
      letterSpacing: '-0.005em',
    },
  },
};

export default Theme;
