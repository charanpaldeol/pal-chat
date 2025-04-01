import { useEffect, useRef, useState } from "react";
import * as libsignal from "libsignal-protocol-javascript";
import { IndexedDBSignalStore as SignalStore } from "./services/indexedSignalStore";
import ChatApp from "./ChatApp";

export default function App() {
  return <ChatApp />;
}


