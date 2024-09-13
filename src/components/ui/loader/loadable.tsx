import { ComponentType, Suspense } from 'react';
import { Loader } from './loader';

export type LoadableProps<T> = T extends ComponentType<infer P> ? P : never;

export const Loadable =
  <T extends ComponentType<any>>(Component: T) =>
  (props: LoadableProps<T>) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
