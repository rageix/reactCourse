import { useEffect, useState } from 'react';
export interface WindowSizes {
  windowWidth: number;
  windowHeight: number;
  pageWidth: number;
  pageHeight: number;
  screenWidth: number;
  screenHeight: number;
  pageX: number;
  pageY: number;
  screenX: number;
  screenY: number;
  ratio: number;
}

function windowSizes(): WindowSizes {
  const contentWidth =
    [...document.body.children].reduce(
      (a, el) => Math.max(a, el.getBoundingClientRect().right),
      0,
    ) - document.body.getBoundingClientRect().x;

  return {
    windowWidth: document.documentElement.clientWidth,
    windowHeight: document.documentElement.clientHeight,
    pageWidth: Math.min(document.body.scrollWidth, contentWidth),
    pageHeight: document.body.scrollHeight,
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    pageX: document.body.getBoundingClientRect().x,
    pageY: document.body.getBoundingClientRect().y,
    screenX: -window.screenX,
    screenY: -window.screenY - (window.outerHeight - window.innerHeight),
    ratio: window.devicePixelRatio,
  };
}

/**
 * This hook allows you to easily get the size of the window.
 */

export default function useWindowSizes(): WindowSizes {
  const [sizes, setSizes] = useState<WindowSizes>(windowSizes());

  useEffect(() => {
    function onResize() {
      setSizes(windowSizes());
    }

    window.addEventListener('resize', onResize, true);

    return () => {
      window.removeEventListener('resize', onResize, true);
    };
  }, []);

  return sizes;
}
