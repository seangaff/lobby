import { NearestFilter, TextureLoader, RepeatWrapping } from "three";

import { floorImg } from "./images";

const floorTexture = new TextureLoader().load(floorImg);

floorTexture.wrapS = RepeatWrapping;

export { floorTexture };
