

import React, { useEffect, useRef, useState } from 'react';
import AppScreen from './AppScreen';

const CameraApp = ({ onClose }) => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const stopStream = () => {
    const stream = streamRef.current;
    if (stream) {
      stream.getTracks().forEach((track) => {
        track.stop();
      });
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  const handleClose = () => {
    stopStream();
    onClose();
  };

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Camera error:', err);
        setErrorMessage('Camera access denied or unavailable.');
      }
    };

    startCamera();

    return () => {
      stopStream();
    };
  }, []);

  return (
    <AppScreen title="Camera" onClose={handleClose}>
      {errorMessage ? (
        <div className="text-red-600 dark:text-red-400 text-sm mt-4 text-center">
          {errorMessage}
        </div>
      ) : (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-full rounded-lg shadow-md border dark:border-gray-600"
        />
      )}
    </AppScreen>
  );
};

export default CameraApp;
