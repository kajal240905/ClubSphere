import React from 'react';
import JitsiMeeting from './JitsiMeeting';

function video() {
  return (
    <div>
      <h1>My Video Conference</h1>
      <JitsiMeeting roomName="YourRoomNameHere" userName="John Doe" />
    </div>
  );
}

export default video;