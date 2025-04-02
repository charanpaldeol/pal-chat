import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
//import ChatPage from './pages/ChatPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
  );
}

export default App;




/*


import { useEffect, useRef, useState } from "react";
// import * as libsignal from 'libsignal';

import { IndexedDBSignalStore as SignalStore } from "./services/indexedSignalStore";
// import * as libsignal from '@privacyresearch/libsignal-protocol-javascript';

// import ChatApp from "./ChatApp";

export default function App() {
  return <ChatApp />;
}
*/

