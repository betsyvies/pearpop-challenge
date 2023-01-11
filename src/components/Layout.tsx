import React, {type ReactElement} from 'react';
import Head from 'next/head';

type Props = {
	children?: ReactElement;
};

const Layaut = ({children}: Props) => (
	<>
		<Head>
      <title>Pearpop Challenge</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
		</Head>
		<main>
			{children}
		</main>
	</>
);

export default Layaut;