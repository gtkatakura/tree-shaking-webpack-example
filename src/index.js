export const pages = (() => {
  if (process.env.NODE_ENV === 'production') {
    return [
      import(/* webpackChunkName: "a" */ './pages/a'),
      import(/* webpackChunkName: "b" */ './pages/b'),
    ]
  }
  
  if (process.env.NODE_ENV === 'development') {
    return [
      import(/* webpackChunkName: "c" */ './pages/c'),
    ]
  }

  return []
})()