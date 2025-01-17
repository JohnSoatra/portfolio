import { Vibrant } from "node-vibrant/browser";

function getBackgroundColor(url: string): Promise<any> {
  return new Promise((res, rej) => {
    Vibrant.from(url)
      .getPalette()
      .then((palette) => {
        res(palette.LightVibrant?.hex);
      })
      .catch((error) => {
        rej(error);
      });
  });
}

export {
  getBackgroundColor
}