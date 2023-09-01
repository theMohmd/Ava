import React, { useEffect, useRef, useState } from "react";
import { MicIcon } from "../assets/Icons";
import ReactLoading from "react-loading";
import RecordResultBox from "./RecordResultBox";
import { motion } from "framer-motion";

const WS_URL = import.meta.env.VITE_WS_URL;
const mimeType = "audio/webm;codecs=opus";

const RecordBox = () => {
  const [recordingStatus, setRecordingStatus] = useState("initial"); // initial, recording ,inactive
  const [data, setData] = useState([]);
  const [connected, setConnected] = useState(false);
  const [message, setMessage] = useState();
  const [stream, setStream] = useState();

  const mediaRecorder = useRef();
  const recording = useRef(false);
  const ws = useRef();
  
  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setStream(streamData);
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser.");
    }
  };

  const recordAndSend = () => {
    if (mediaRecorder.current) mediaRecorder.current.stop();

    mediaRecorder.current = new MediaRecorder(stream, { type: mimeType });
    mediaRecorder.current.start();
    let localAudioChunks = [];
    mediaRecorder.current.addEventListener("dataavailable", (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      ws.current.send(event.data);
      localAudioChunks.push(event.data);
    });
    if (recording.current) {
      setTimeout(() => {
        recordAndSend();
      }, 1000);
    }
  };
  const startRecording = async () => {
    getMicrophonePermission().then(() => {
      setRecordingStatus("recording");
      recording.current = true;
    });
  };

  const stopRecording = () => {
    recording.current = false;
    ws.current.close();
    setRecordingStatus("inactive");
  };
  const onSocketMessage = (event) => {
    setMessage(JSON.parse(event.data));
  };

  useEffect(() => {
    if (message) {
      setData((prev) => {
        if (prev.length > 0) {
          if (prev[prev.length - 1].segment_id === message.segment_id) {
            prev[prev.length - 1] = message;
            return prev;
          } else {
            return [...prev, message];
          }
        } else {
          return [...prev, message];
        }
      });
    }
  }, [data, message]);

  useEffect(() => {
    if (recordingStatus === "initial") {
      if (connected) {
        recording.current = false;
        ws.current.close();
        setConnected(false);
      }
      setData([]);
      ws.current = new WebSocket(WS_URL);

      ws.current.addEventListener("open", () => {
        // console.log("connected");
        setConnected(true);
      });
      ws.current.addEventListener("message", onSocketMessage);
      ws.current.addEventListener("close", () => {
        // console.log("closed");
      });
    }
  }, [ws, recordingStatus]);

  useEffect(() => {
    if (recordingStatus === "recording" && connected) {
      recordAndSend();
    }
  }, [recordingStatus, connected]);

  if (recordingStatus === "initial") {
    return (
      <motion.div
        className='
        h-full w-full px-20
        flex flex-col justify-center items-center
        '
        initial={{ opacity: 0, transform: "translate(0, 30px)" }}
        animate={{ opacity: 1, transform: "translate(0, 0)" }}
        exit={{ opacity: 0 }}
      >
        <button
          className={`bg-green mb-2 rounded-full relative h-16 w-16 hover:opacity-90 ${
            recordingStatus === "recording" ? "animate-bounce" : ""
          }`}
          onClick={startRecording}
        >
          <MicIcon className='h-full w-full p-3' />
        </button>
        <div className='max-h-[20vh] py-4'>
          <p className='[direction:rtl] max-w-[80ch] text-center text-[#626262] font-light'>
            برای شروع به صحبت، دکمه را فشار دهید
            <br />
            متن پیاده شده آن، در اینجا ظاهر شود
          </p>
        </div>
      </motion.div>
    );
  } else {
    return (
      <>
        {data && connected ? (
          <RecordResultBox
            restart={setRecordingStatus}
            color={"green"}
            data={data}
            stop={stopRecording}
            state={recordingStatus}
          />
        ) : (
          <div
            className='
            h-full w-full
            flex justify-center items-center
            '
          >
            <ReactLoading type={"spin"} color={"#00BA9F"} />
          </div>
        )}
      </>
    );
  }
};

export default RecordBox;
