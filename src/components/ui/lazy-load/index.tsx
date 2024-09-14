import { ComponentType, Suspense } from 'react';
import { Loader } from '../loader';

export type LazyLoadProps<T> = T extends ComponentType<infer P> ? P : never;

export const LazyLoad =
  <T extends ComponentType<any>>(Component: T) =>
  (props: LazyLoadProps<T>) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
