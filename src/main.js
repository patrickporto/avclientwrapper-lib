import { CANONICAL_NAME, MODULE_NAME } from "./constants.js";
import { detectAVClient } from "./detect.js";
import { replaceStreamTracks } from "./stream.js";


const api = {
    detectAVClient,
    replaceStreamTracks,
}

Hooks.on('init', async () => {
    console.log(`${MODULE_NAME} | Initializing ${MODULE_NAME}`);
    game.modules.get(CANONICAL_NAME).api = api;
});
