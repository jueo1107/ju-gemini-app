import React, { useState, useEffect } from 'react';

import Header from './Header';
import Balance from './Balance';
import Send from './Send';
import History from './History';

import { JobcoinDetails } from './styled';

const Jobcoin = ({ userAddress }) => {
  const [isLoading, setLoading] = useState(false);
  const [jobcoinData, setJobcoinData] = useState(null);

  const fetchData = async (isRefetch) => {
    //don't want whole page to reload if it's a refetch and instead would want different kind of loading indicator for users
    !isRefetch && setLoading(true);
    //not accounting for error handling here for this project
    const data = await fetch(`http://jobcoin.gemini.com/deferral-dodge/api/addresses/${userAddress}`);
    const parsedData = await data.json();
    setJobcoinData(parsedData);
    !isRefetch && setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header userAddress={userAddress} />
      {isLoading ? <div>Loading</div> :
      <JobcoinDetails>
        <div>
          <Balance currentBalance={jobcoinData?.balance}/>
          <Send userAddress={userAddress} refetchData={fetchData} />
        </div>
        <History userAddress={userAddress} data={jobcoinData} />
      </JobcoinDetails>
      }
    </div>
  
  )
};

export default Jobcoin;