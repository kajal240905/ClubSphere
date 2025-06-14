import React, { useEffect, useRef } from 'react';

const JitsiMeeting = ({ roomName, userName }) => {
  const jitsiContainerRef = useRef(null);
  const apiRef = useRef(null);

  useEffect(() => {
    if (!window.JitsiMeetExternalAPI) {
      alert('Jitsi Meet API script not loaded');
      return;
    }

    // Domain for the Jitsi server to connect to
    const domain = 'meet.jit.si';

    const options = {
      roomName: roomName || 'MyUniqueRoomName123',
      parentNode: jitsiContainerRef.current,
      width: '100%',
      height: 600,
      userInfo: {
        displayName: userName || 'Guest',
      },
      configOverwrite: {
        // Optional config here
        startWithAudioMuted: true,
        startWithVideoMuted: true,
      },
      interfaceConfigOverwrite: {
        // Interface customizations here
        // For example: SHOW_JITSI_WATERMARK: false,
      },
    };

    // Create API object and store ref
    apiRef.current = new window.JitsiMeetExternalAPI(domain, options);

    // Cleanup on component unmount
    return () => {
      if (apiRef.current) {
        apiRef.current.dispose();
      }
    };
  }, [roomName, userName]);

  return <div ref={jitsiContainerRef} style={{ height: 600, width: '100%' }} />;
};

export default JitsiMeeting;