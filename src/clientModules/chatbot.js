import React from 'react';
import { ExecutionEnvironment } from '@docusaurus/core/client';
import ChatBot from '../components/ChatBot';

export default (function () {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }

  return {
    onRouteUpdate() {
      // Ensure ChatBot is available on all routes
    }
  };
})();

// Wrapper component to inject ChatBot
export function ChatBotWrapper() {
  return <ChatBot />;
}
