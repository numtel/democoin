import { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import DarkModeDetector from './components/DarkModeDetector.jsx';
import Mint from './components/Mint.jsx';

export default function App() {
  return (
    <main>
      <h1>Optimeme<br />Factory</h1>
      <p className="rainbowkit">
        <ConnectButton />
      </p>
      <blockquote>Show me what democracy looks like!<br />
      This is what democracy looks like?</blockquote>
      <p>A new tokenomics, from the token holders<br />
      For &hellip; the median!</p>

      <p>Continuous election complements traditional discrete elections by providing a sliding scale for deciding along an individual criteria.</p>

      <p>As an initial demonstration of this new type of decision-making protocol, this project has a single criteria under continous election: the price to mint another NFT.</p>
      <Mint />

    </main>
  );
}

