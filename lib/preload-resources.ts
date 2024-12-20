import ReactDOM from 'react-dom';

export const PreloadAuthResources = () => {
  ReactDOM.preload('/auth.png', { as: 'image', fetchPriority: 'high' });
  return null;
};

export const PreloadAboutResources = () => {
  ReactDOM.preload('/about.png', { as: 'image', fetchPriority: 'high' });
  return null;
};
