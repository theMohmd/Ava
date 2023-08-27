import React, { useEffect, useRef, useState } from "react";
import { StopIcon, MicIcon } from "../assets/Icons";
import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
//const URL = import.meta.env.VITE_WS_URL;
const URL = "wss://harf.roshan-ai.ir/ws_api/transcribe_files/";
const socket = io(URL, {
  autoConnect: false,
});

const mimeType = "audio/webm;codecs=opus";
const RecordBox = () => {
  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState(null);
  const mediaRecorder = useRef(null);
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [audioChunks, setAudioChunks] = useState([]);
  const [audio, setAudio] = useState(null);

  const func = () => {
    socket.connect();
  };
  useEffect(() => {
    socket.on("connection", () => {
      console.log("connected");
    });
  }, [socket]);

  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };

  const startRecording = async () => {
    getMicrophonePermission();
    if (permission) {
      setRecordingStatus("recording");
      //create new Media recorder instance using the stream
      const media = new MediaRecorder(stream, { type: mimeType });
      //set the MediaRecorder instance to the mediaRecorder ref
      mediaRecorder.current = media;
      //invokes the start method to start the recording process
      mediaRecorder.current.start();
      let localAudioChunks = [];
      mediaRecorder.current.ondataavailable = (event) => {
        if (typeof event.data === "undefined") return;
        if (event.data.size === 0) return;
        localAudioChunks.push(event.data);
      };
      setAudioChunks(localAudioChunks);
    }
  };

  const stopRecording = () => {
    setRecordingStatus("inactive");
    //stops the recording instance
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      //creates a blob file from the audiochunks data
      const audioBlob = new Blob(audioChunks, { type: mimeType });
      //creates a playable URL from the blob file.
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudio(audioUrl);
      setAudioChunks([]);
    };
  };

  return (
    <div
      className='
      h-full w-full px-20
      flex flex-col justify-center items-center
      '
    >
      <button
        className={`bg-green mb-2 rounded-full relative h-16 w-16 ${
          recordingStatus === "recording" ? "animate-bounce" : ""
        }`}
        onClick={() => {
          recordingStatus === "inactive" ? startRecording() : stopRecording();
        }}
      >
        {recordingStatus === "inactive" ? (
          <MicIcon className='h-full w-full p-3' />
        ) : (
          <StopIcon className='h-full w-full p-4' fill='none' stroke='white' />
        )}
      </button>
      <div className='max-h-[20vh] py-4'>
        <p className='[direction:rtl] max-w-[80ch] text-center text-[#626262] font-light'>
          برای شروع به صحبت، دکمه را فشار دهید
          <br />
          متن پیاده شده آن، در اینجا ظاهر شود
        </p>
        <button onClick={func}>click</button>
        {audio ? (
          <div className='audio-container'>
            <audio src={audio} controls></audio>
            <a download href={audio}>
              Download Recording
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default RecordBox;
