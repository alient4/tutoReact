import React from 'react'

export const Landing = React.lazy(() => import('./Landing'))
export const Contact = React.lazy(() => import('./Contact'))
export const Signup = React.lazy(() => import('./Signup'))


/*Lazy loading : on ne charge les composants que lorsqu'on en a besoin : ajouter  <Suspense fallback={<div>Loading...</div>}*/
