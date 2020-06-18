type ComponentConstructor = (props?: any) => JSX.Element

interface RouteConfig {
  /** 路由路径 */
  path: string
  /** 匹配组件 */
  component?: ComponentConstructor
  /** 是否严格匹配；默认：true */
  exact?: boolean
  /** 子路由；会继承父路由的路径 */
  children?: RouteConfig[]
  /** 重定向路径 */
  redirect?: string
}