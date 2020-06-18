/// <reference path="index.d.ts" />

import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function getResolvedPath (path: string, rootPath: string): string {
  const resolvedPath = `${rootPath}/${path}`.replace(/\/{2,}/g, '/')

  return resolvedPath.slice(0, 1) === '/'
    ? resolvedPath
    : '/' + resolvedPath
}

export function RouteFactory (routes: RouteConfig[], rootPath = ''): JSX.Element[] {
  return routes.reduce((prev: JSX.Element[], RouteConfig, key) => {
    const { path, component, exact, children, redirect } = Object.assign({ exact: true }, RouteConfig)
    const resolvedPath = getResolvedPath(path, rootPath)

    if (redirect !== undefined) {
      prev.push(<Redirect from={resolvedPath} to={redirect} exact={exact} key={key}/>)
    }

    if (!component && !redirect) {
      throw new ReferenceError(`Path '${path}': Components or redirect is not defined`)
    }

    prev.push(<Route key={key} path={resolvedPath} exact={exact} component={component}/>)
    
    if (Array.isArray(children) && children.length > 0) {
      prev.push(...RouteFactory(children, resolvedPath))
    }

    return prev
  }, [])
}