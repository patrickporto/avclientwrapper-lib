import { CANONICAL_NAME, MODULE_NAME } from "./constants.js";
import { detectAVClient } from "./detect.js";

const api = {
    detectAVClient
}

Hooks.on('init', async () => {
    console.log(`${MODULE_NAME} | Initializing ${MODULE_NAME}`);
    game.modules.get(CANONICAL_NAME).api = api;
});
