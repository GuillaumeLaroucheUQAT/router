---
id: createRootRouteFunction
title: createRootRoute function
---

The `createRootRoute` function returns a new `RootRoute` instance. A root route instance can then be used to create a route tree.

#### `options`

```tsx
Omit<
  RouteOptions,
  | 'path'
  | 'id'
  | 'getParentRoute'
  | 'caseSensitive'
  | 'parseParams'
  | 'stringifyParams'
>
```

- Required
- The options that will be used to configure the root route instance

### `RootRoute` methods

#### `addChildren`

- Type: `(children: Route[]) => this`
- Adds child routes to the root route instance and returns the root route instance (but with updated types to reflect the new children)

#### `update`

- Type: `(options: Partial<UpdatableRouteOptions>) => this`
- Updates the root route instance with new options and returns the root route instance (but with updated types to reflect the new options)
- In some circumstances, it can be useful to update a root route instance's options after it has been created to avoid circular type references.
