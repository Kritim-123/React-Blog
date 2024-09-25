import React from 'react';
import { useParams } from 'react-router-dom';

const generatePage = (page) => {
  try {
    const Component = React.lazy(() => import(`./pages/${page}`));
    return <Component />;
  } catch (err) {
    console.warn(err);
    return <div>404</div>;
  }
};

export default function PageRenderer() {
  const { page } = useParams();
  return generatePage(page);
}
