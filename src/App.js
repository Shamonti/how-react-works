import { useState } from 'react';

const content = [
  {
    summary: 'React is a library for building UIs',
    details:
      'Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    summary: 'State management is like giving state a home',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    summary: 'We can think of props as the component API',
    details:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

export default function App() {
  return (
    <div>
      <Tabbed></Tabbed>
    </div>
  );
}

function Tabbed() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <Tab num={0} activeTab={activeTab} setActiveTab={setActiveTab}></Tab>
      <Tab num={1} activeTab={activeTab} setActiveTab={setActiveTab}></Tab>
      <Tab num={2} activeTab={activeTab} setActiveTab={setActiveTab}></Tab>
      <Tab num={3} activeTab={activeTab} setActiveTab={setActiveTab}></Tab>
      <TabContent item={content.at(activeTab)}></TabContent>
      <DifferentContent></DifferentContent>
    </div>
  );
}

function Tab({ num, activeTab, setActiveTab }) {
  return (
    <button
      className={activeTab === num ? 'tab active' : 'tab'}
      onClick={() => setActiveTab(num)}
    >
      Tab{num + 1}
    </button>
  );
}

function TabContent({ item }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [likes, setLikes] = useState(0);

  function handleOnClick() {
    setLikes(likes + 1);
  }

  return (
    <div className='tab-content'>
      <h4>{item.summary}</h4>
      <p style={{ display: isExpanded ? 'block' : 'none' }}>{item.details}</p>
      <div className='tab-actions'>
        <button onClick={() => setIsExpanded(h => !h)}>
          {isExpanded ? 'Hide' : 'Show'} Details
        </button>
        <div className='hearts-counter'>
          {likes} ❤<button onClick={handleOnClick}>+</button>
          <button>+++</button>
        </div>
      </div>
      <div className='tab-undo'>
        <button>Undo</button>
        <button>Undo in 2s</button>
      </div>
    </div>
  );
}

function DifferentContent() {
  return <div>different content</div>;
}
