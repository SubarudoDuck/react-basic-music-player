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
    const activeLibraryHandler = (nextPrev) => {
        const newSongs = songs.map((song) => {
            if (song.id === nextPrev.id) {
                return {
                    ...song,
                    active: true,
                };
            }
            else {
                return {
                    ...song,
                    active: false,
                };
            }
        });
        setSongs(newSongs);
    }
    const timeSkipHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value });
    }
    const playPauseHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }
    const getCurrTime = (time) => Math.floor(time / 60) + ":" + ('0' + Math.floor(time % 60)).slice(-2);
    const prevNextTrackHandler = async (dir) => {
        let currIndex = songs.findIndex((song) => song.id = currSong.id);
        if (dir === 'skip-forward') {
            await setCurrentSong(songs[(currIndex + 1) % songs.length]);
            activeLibraryHandler(songs[(currIndex + 1) % songs.length]);
        } else if (dir === 'skip-back') {
            if ((currIndex - 1) % songs.length === -1) {
                await setCurrentSong(songs[songs.length - 1]);
                activeLibraryHandler(songs[songs.length - 1]);
            }
            await setCurrentSong(songs[(currIndex - 1) % songs.length]);
            activeLibraryHandler(songs[(currIndex - 1) % songs.length]);
        }
        if (isPlaying) audioRef.current.play();
    }

}