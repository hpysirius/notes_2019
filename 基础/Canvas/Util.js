// 给视频加字幕
export function addVideoCaption(video, text) {
    let texttrack = video.textTracks[0];
    if (!texttrack) {
        texttrack = video.addTextTrack("subtitles", "sample");
        texttrack.mode = "showing";
        window['VTTCue'] = window['VTTCue'] || window['TextTrackCue'];
    }
    let currentCue = texttrack.cues[0];
    if (currentCue) {
        texttrack.removeCue(currentCue);
    }
    currentCue = new VTTCue(0, 99999, text);
    currentCue.line = 0;
    currentCue.align = "start";
    texttrack.addCue(currentCue);
}