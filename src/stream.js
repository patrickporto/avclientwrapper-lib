import { AV_CLIENT, MODULE_NAME } from "./constants";
import { detectAVClient } from "./detect";


export function replaceStreamTracks(stream) {
    const client = game.webrtc.client
    switch(detectAVClient()) {
        case AV_CLIENT.SIMPLE_PEER: {
            const oldStream = client.localStream;
            client.levelsStream = stream.clone();
            for (let peer of client.peers.values()) {
                if (peer.destroyed) continue;
                if (oldStream) peer.removeStream(oldStream);
                peer.addStream(cameraEffect?.stream);
            }
            break
        }
        case AV_CLIENT.LIVE_KIT: {
            const updateTracks = () => {
                for (const track of stream.getVideoTracks()) {
                    client._liveKitClient.videoTrack.sender.replaceTrack(track);
                }
            }
            updateTracks()
            client._liveKitClient.videoTrack.off(
                TrackEvent.Unmuted,
                updateTracks
            );
            client._liveKitClient.videoTrack.on(
                TrackEvent.Unmuted,
                updateTracks
            );
            break
        }
        case AV_CLIENT.UNKNOWN: {
            ui.notifications.error(`${MODULE_NAME} | Unknown A/V Client`)
            break
        }
    }
}
