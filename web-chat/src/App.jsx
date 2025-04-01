import { useEffect, useRef, useState } from "react";
import * as libsignal from 'libsignal';

import { IndexedDBSignalStore as SignalStore } from "./services/indexedSignalStore";
import * as libsignal from '@privacyresearch/libsignal-protocol-javascript';

import ChatApp from "./ChatApp";

export default function App() {
  return <ChatApp />;
}


