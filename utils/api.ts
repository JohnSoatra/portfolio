function prefixApi(pathName: string) {
  return ('/api/' + pathName).replace(/\/+/g, '/');
}

export {
  prefixApi
}
