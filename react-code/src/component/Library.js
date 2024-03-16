import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({
     songs,
     setCurrentSong,
     audioRef,
     isPlaying,
     setSongs,
     setLibraryStatus,
     libraryStatus,
}) => {
    return (
        <div className={`library ${libraryStatus ? 'active' : 'inactive'}`}>
            <h2 id='songlist' style={{color: "white"}}>Song List</h2>
            <div className = "songs">
                {songs.map((song) => (
                    <LibrarySong
                        setSongs = {setSongs}
                        isPlaying = {isPlaying}
                        
                    />
                )}
            </div>
        </div>
    );
}