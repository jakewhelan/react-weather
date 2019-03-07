export const forecastStyles = theme => ({
  wrapper: {
    maxWidth: 1300,
    margin: '0 auto'
  },
  card: {
    flexGrow: 1,
    paddingBottom: 20
  },
  divider: {
    marginBottom: 20,
    [theme.breakpoints.down('md')]: {
      marginBottom: 10
    }
  },
  container: {
    width: '100%',
    display: 'flex',
    paddingRight: 20,
    paddingLeft: 10,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  },
  content: {
    flex: 1,
    display: 'flex',
    marginLeft: 10,
    marginBottom: 1,
    [theme.breakpoints.down('md')]: {
      paddingRight: 40,
      marginTop: 10
    }
  },
  detail: {
    flex: 1
  },
  cover: {
    flex: 1,
    width: 151,
    height: '100%',
    backgroundSize: 'auto',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      backgroundPosition: 'right'
    }
  },
  now: {
    width: '100%',
    display: 'flex',
    height: 300
  },
  hero: {
    flex: 5,
    backgroundSize: 'contain'
  },
  heroText: {
    flex: 2
  },
  progress: {
    margin: '100px auto',
    display: 'block'
  }
})
