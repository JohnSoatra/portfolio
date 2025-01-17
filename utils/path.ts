import { getOrigin } from "./window";

function cleanPath(path: string) {
  return path.replace(/\/+/g, '/') || '/';
}

function joinPath(...paths: string[]) {
  return cleanPath('/' + paths.join('/'));
}

function validateUrl(url: string) {
  if (!/^https?:\/\//i.test(url)) {
    return getOrigin() + cleanPath(url);
  }

  return url;
}

export {
  cleanPath,
  joinPath,
  validateUrl
}
