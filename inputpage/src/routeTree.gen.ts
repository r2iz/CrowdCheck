/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const SelectRouteLazyImport = createFileRoute('/select')()
const InputRouteLazyImport = createFileRoute('/input')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const SelectRouteLazyRoute = SelectRouteLazyImport.update({
  path: '/select',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/select/route.lazy').then((d) => d.Route))

const InputRouteLazyRoute = InputRouteLazyImport.update({
  path: '/input',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/input/route.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/input': {
      preLoaderRoute: typeof InputRouteLazyImport
      parentRoute: typeof rootRoute
    }
    '/select': {
      preLoaderRoute: typeof SelectRouteLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  InputRouteLazyRoute,
  SelectRouteLazyRoute,
])

/* prettier-ignore-end */
