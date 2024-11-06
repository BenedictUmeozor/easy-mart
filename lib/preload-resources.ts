import ReactDOM from 'react-dom';

export const PreloadAuthResources = () => {
  ReactDOM.preload('/ayth.png', { as: 'image', fetchPriority: 'high' });
  return null;
};
