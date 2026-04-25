import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { SONGS } from '../data/songs';

const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showInstruction, setShowInstruction] = useState(false);

  const audioRef = useRef(null);
  const clickTimerRef = useRef(null);
  const clickCountRef = useRef(0);
  const instructionTimerRef = useRef(null);
  const wasPlayingRef = useRef(false);

  const currentSong = SONGS[currentSongIndex];

  // Handle single tap and double tap
  const handleTap = () => {
    clickCountRef.current += 1;

    if (clickCountRef.current === 1) {
      // Set timer for potential second click
      clickTimerRef.current = setTimeout(() => {
        // Single tap detected
        togglePlayPause();
        clickCountRef.current = 0;
      }, 300);
    } else if (clickCountRef.current === 2) {
      // Double tap detected
      clearTimeout(clickTimerRef.current);
      playNextSong();
      clickCountRef.current = 0;
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const playNextSong = useCallback(() => {
    wasPlayingRef.current = isPlaying;
    setCurrentSongIndex(prevIndex => (prevIndex + 1) % SONGS.length);
    setCurrentTime(0);
  }, [isPlaying]);

  // Handle audio element
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);

    const handleEnded = () => {
      playNextSong();
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [playNextSong]);

  // Auto play when song changes
  useEffect(() => {
    const audio = audioRef.current;
    if (audio && isPlaying) {
      audio.play().catch(() => {
        // Handle autoplay restriction
        setIsPlaying(false);
      });
    } else if (audio && !isPlaying) {
      audio.pause();
    }
  }, [isPlaying]);

  // Show/hide instruction text
  useEffect(() => {
    if (isPlaying) {
      setShowInstruction(true);
      clearTimeout(instructionTimerRef.current);
      instructionTimerRef.current = setTimeout(() => {
        setShowInstruction(false);
      }, 3000);
    }

    return () => {
      clearTimeout(instructionTimerRef.current);
    };
  }, [isPlaying]);

  // Update audio source
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentSong.url;
      if (wasPlayingRef.current) {
        audioRef.current.play().catch(() => {
          setIsPlaying(false);
        });
      }
    }
  }, [currentSong.url]);

  return (
    <>
      <audio
        ref={audioRef}
        src={currentSong.url}
        crossOrigin="anonymous"
      />

      <div className="fixed bottom-6 right-6 z-50">
        {/* Instruction Text */}
        {showInstruction && (
          <div className="text-xs text-white mb-2 text-right font-semibold opacity-80 animate-pulse">
            Double tap to change →
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={handleTap}
          onTouchEnd={(e) => {
            e.preventDefault();
            handleTap();
          }}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
          title={isPlaying ? 'Pause (Single tap) / Next (Double tap)' : 'Play (Single tap) / Next (Double tap)'}
        >
          {isPlaying ? (
            <FaPause size={20} />
          ) : (
            <FaPlay size={20} className="ml-1" />
          )}
        </button>

        {/* Song Info Tooltip */}
        <div className="absolute bottom-20 left-0 bg-gray-900 bg-opacity-90 text-white text-xs rounded-lg p-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none max-w-xs">
          <div className="font-semibold truncate">{currentSong.title}</div>
          <div className="text-gray-300 text-xs truncate">{currentSong.artist}</div>
        </div>

        {/* Progress bar indicator */}
        {duration > 0 && (
          <div className="mt-2 w-14 h-1 bg-gray-600 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-pink-500 to-blue-500 transition-all duration-100"
              style={{width: `${(currentTime / duration) * 100}%`}}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default MusicPlayer;
