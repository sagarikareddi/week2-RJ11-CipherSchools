import React, { lazy, Suspense } from 'react';

const OtherComponent = lazy(() => import('./OtherComponent'));

const MyComponent = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OtherComponent />
    </Suspense>
  );
};

export default MyComponent;


// In this example, the OtherComponent is loaded as a lazy component using the lazy function from the react library. This means that the component is not loaded until it is actually needed, resulting in a faster initial load time for the page.

// The Suspense component is used to wrap the lazy component and provides a fallback UI to be shown while the component is being loaded.

// In this example, when MyComponent is rendered, the OtherComponent will not be loaded until it is actually needed. When it is needed, the OtherComponent will be loaded asynchronously and the Suspense component will display the fallback UI until the component is fully loaded.




