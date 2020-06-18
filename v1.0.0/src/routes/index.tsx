/// <reference path="index.d.ts" />

import React from 'react'
import { RouteFactory } from './RouteFactory'
import { Switch } from 'react-router-dom'

import Home from '@pages/Home/Home'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '*',
    redirect: '/'
  }
]

export default function Routes (): JSX.Element {
  return (
    <Switch>
      { RouteFactory(routes) }
    </Switch>
  )
}