import {AV_CLIENT} from './constants.js';

export function detectAVClient() {
    if (game.modules.get("avclient-livekit")?.active) {
        return AV_CLIENT.LIVE_KIT;
    }
    if (game.webrtc.client?.constructor?.name == "SimplePeerAVClient") {
        return AV_CLIENT.SIMPLE_PEER;
    }
    return AV_CLIENT.UNKNOWN;
}
