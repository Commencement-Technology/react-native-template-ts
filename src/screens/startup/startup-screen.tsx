import React from 'react';

import { ContentWrapper, Header, ScreenWrapper } from '@/components';

const Startup: React.FC = () => {
	return (
		<ScreenWrapper>
			<Header type="none" title="Home" />
			<ContentWrapper />
		</ScreenWrapper>
	);
};

export default Startup;
