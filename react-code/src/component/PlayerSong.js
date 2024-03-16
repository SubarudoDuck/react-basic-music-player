import {fortAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faPlayCircle,
    faStepBackward,
    faStepForward,
    faPauseCircle,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
    currSong,
    isPlaying,
    setIsPlaying,
    audioRef,
    setSongInfo,
    songInfo,
    songs,
    setCurrentSong,
    id,
    setSongs,
}) => {
    const timeSkipHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value });
    }


}