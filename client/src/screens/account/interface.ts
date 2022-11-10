export interface ILogRoutes {
  id: string;
  path: string;
  component: () => JSX.Element;
}
