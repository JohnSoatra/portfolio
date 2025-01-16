function isClient() {
  return typeof window !== 'undefined';
}

function getOrigin() {
  return window.location.origin;
}

export {
  isClient,
  getOrigin
}
