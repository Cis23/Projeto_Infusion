import { Menu } from "./Menu.js";
import {Slide} from "./Slide.js"

const BODY = document.querySelector('body');
BODY.classList.remove('no-js');
BODY.classList.add('js');

new Menu("header__nav");
new Slide("laptopSlide","prev","next","thumbLaptop");
new Slide("slideText","prevText","nextText");

