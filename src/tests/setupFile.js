// jsdom does not support HTML5 canvas, so we need to mock out this function
HTMLCanvasElement.prototype.getContext = () => { 
  return {}
};