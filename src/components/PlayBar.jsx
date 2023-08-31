import { useState, useEffect, useRef, useCallback } from "react";
import { PauseIcon, PlayIcon, StopIcon, VolumeIcon } from "../assets/Icons";
const colorConvert = {
  blue: "#118AD3",
  green: "#00BA9F",
  red: "#FF1654",
};
const duration2second = (input) => {
  var a = input.split(":");
  var seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
  return seconds;
};

const PlayBar = ({ color, url, duration }) => {
  const [timeProgress, setTimeProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);

  const bufferRef = useRef();
  const audioRef = useRef();
  const sliderRef = useRef();
  const playAnimationRef = useRef();
  const sliderProgressRef = useRef();
  const volumeSliderRef = useRef();
  const volumeProgressRef = useRef();
  const onLoadedMetadata = () => {
    sliderRef.current.max = Math.floor(duration2second(duration));
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const repeat = useCallback(() => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);
      sliderRef.current.value = currentTime;
      //progress
      sliderProgressRef.current.style.width = `${
        (sliderRef.current.value / Math.floor(duration2second(duration))) * 100
      }%`;
      //buffer
      if (audioRef.current.buffered.length === 1) {
        bufferRef.current.style.width = `${
          (100 * Math.floor(audioRef.current.buffered.end(0))) /
          Math.floor(duration2second(duration))
        }%`;
      }
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, sliderRef, setTimeProgress]);

  const handleProgressChange = () => {
    audioRef.current.currentTime = sliderRef.current.value;
  };

  const formatTime = (time) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  return (
    <>
      <audio
        src={url}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={() => {
          setIsPlaying(false);
        }}
      />
      <div
        className='
        w-[520px] h-auto items-center justify-center
        rounded-[10px]
        p-3
        bg-[#F8F8F8]
        grid grid-cols-[51fr_358fr_40fr_73fr] grid-rows-1 gap-2
        mx-10
        '
      >
        {/* control buttons */}
        <div className='flex justify-around'>
          <button
            className='h-5 w-5'
            onClick={() => {
              sliderRef.current.value = sliderRef.current.max;
            }}
          >
            <StopIcon className='h-full w-full' fill='#3D3D3D' stroke='none' />
          </button>
          <button
            className='
            h-5 w-5 flex justify-center items-center
            '
            onClick={togglePlayPause}
          >
            {isPlaying ? (
              <PauseIcon />
            ) : (
              <PlayIcon className='h-5 w-5 fill-[#3D3D3D] stroke-none' />
            )}
          </button>
        </div>

        {/* slider */}
        <div className='flex justify-center items-center overflow-hidden'>
          <div
            className='
            grid grid-cols-1 grid-rows-1
            justify-center items-center
            w-full
            '
          >
            <input
              ref={sliderRef}
              className={`
              row-start-1 col-start-1
              z-30 ${color} p-0
              `}
              onChange={handleProgressChange}
              type='range'
            />
            {/* slider progress */}
            <div
              ref={sliderProgressRef}
              className={`
              row-start-1 col-start-1
              z-20
              h-[3px]
              w-0
              bg-${color}
              rounded-full
              `}
            ></div>
            {/* slider buffer */}
            <div
              ref={bufferRef}
              className='
              overflow-hidden
              row-start-1 col-start-1
              z-10
              h-[1px]
              w-0
              bg-[#898989]
              rounded-full
              '
            ></div>
            {/* slider rail */}
            <div
              className='
              row-start-1 col-start-1
              z-0
              h-[1px]
              bg-[#C6C6C6]
              rounded-full
              '
            ></div>
          </div>
        </div>

        {/* current time */}
        <div>
          <p
            className='
            text-sm font-iranSans
            '
          >
            {formatTime(timeProgress)}
          </p>
        </div>

        {/* volume */}
        <div
          className='
          flex gap-2
          '
        >
          <button>
            <VolumeIcon color={color} />
          </button>
          <div className='w-[70%] flex justify-center items-center'>
            <div
              className='
              grid grid-cols-1 grid-rows-1
              justify-center items-center
              w-full
              '
            >
              <input
                ref={volumeSliderRef}
                min={0}
                max={100}
                value={volume}
                onChange={(e) => {
                  setVolume(e.target.value);
                  volumeProgressRef.current.style.width = `${e.target.value}%`;
                }}
                className={`
                row-start-1 col-start-1
                z-30 ${color} opacity-0
                `}
                type='range'
              />
              <div
                ref={volumeProgressRef}
                className={`
                row-start-1 col-start-1
                z-20
                h-[2px]
                w-[60%]
                bg-${color}
                rounded-full
                `}
              ></div>
              <div
                className='
                row-start-1 col-start-1
                z-0
                w-full h-[2px]
                bg-[#C6C6C6]
                rounded-full
                '
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayBar;
