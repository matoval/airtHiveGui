import {useState} from 'react';
import './App.css';
import {Greet} from "../wailsjs/go/main/App";
import { ChatView } from './views/ChatView';
import { BackendsView } from './views/BackendsView';

function App() {
    const [activeTab, setActiveTab] = useState<'chat' | 'backends'>('chat');

    function greet() {
        Greet("test").then();
    }

    const handleTabClick = (tab: 'chat' | 'backends') => {
        setActiveTab(tab)
    }

    return (
        <div id="App">
            <div id='Nav'>
                <button className='NavBtn' onClick={() => handleTabClick('chat')}>
                    Chat
                </button>
                <button className='NavBtn' onClick={() => handleTabClick('backends')}>
                    Backends
                </button>
            </div>
            <div id='View'>
                {activeTab === 'chat' && <ChatView />}
                {activeTab === 'backends' && <BackendsView />}
            </div>
        </div>
    )
}

export default App
