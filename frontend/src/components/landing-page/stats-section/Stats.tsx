import React from 'react';
import { StatsSection } from './styles';

const Stats = () => {
    return (
       <StatsSection>
            <div>
                <h2>500M</h2>
                <p>Over 500 million transactions and trades tracked and managed.</p>
            </div>
            <div>
                <h2>$100B</h2>
                <p>Managing more than $100 billion in portfolios.</p>
            </div>
            <div>
                <h2>1.2M+</h2>
                <p>More than 1.2M users from all over the world.</p>
            </div>
       </StatsSection>
    );
};

export default Stats;