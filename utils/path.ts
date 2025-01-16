function cleanPath(path: string) {
  return path.replace(/\/+/g, '/') || '/';
}

function joinPath(...paths: string[]) {
  return cleanPath('/' + paths.join('/'));
}

export {
  cleanPath,
  joinPath
}
