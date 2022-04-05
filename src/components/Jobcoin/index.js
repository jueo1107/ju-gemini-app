import React, { useState, useContext, useEffect } from 'react';

import { AppContext } from '../../context/AppContext';
import Header from './Header';
import Balance from './Balance';
import Send from './Send';
import History from './History';

import { JobcoinDetails, BalanceSendWrapper } from './styled';

const Jobcoin = () => {
  const [isLoading, setLoading] = useState(false);
  const [jobcoinData, setJobcoinData] = useState(null);
  const { userAddress } = useContext(AppContext);

  const fetchData = (isRefetch) => {
    //don't want whole page to reload if it's a refetch and instead would want different kind of loading indicator for users
    !isRefetch && setLoading(true);
    //not accounting for error handling here for this project
    fetch(`http://jobcoin.gemini.com/deferral-dodge/api/addresses/${userAddress}`).then(response => {
      response.json().then(parsedData => {
        setJobcoinData(parsedData);
        !isRefetch && setLoading(false);
      })
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header userAddress={userAddress} />
      {isLoading ? 
        <div>Loading</div> 
        :
        <JobcoinDetails>
          <BalanceSendWrapper>
            <Balance currentBalance={jobcoinData?.balance}/>
            <Send userAddress={userAddress} refetchData={fetchData} />
          </BalanceSendWrapper>
          <History userAddress={userAddress} data={jobcoinData} />
        </JobcoinDetails>
      }
    </div>
  
  )
};

export default Jobcoin;