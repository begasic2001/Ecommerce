export interface IPublicRoutes {
  id: string;
  path: string;
  component: () => JSX.Element;
}
