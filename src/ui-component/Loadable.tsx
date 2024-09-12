import { ComponentType, Suspense } from 'react';
import Loader from './Loader';

type LoadableProps<T> = T extends ComponentType<infer P> ? P : never;

// ==============================|| LOADABLE - LAZY LOADING ||============================== //
const Loadable =
  <T extends ComponentType<any>>(Component: T) =>
  (props: LoadableProps<T>) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
