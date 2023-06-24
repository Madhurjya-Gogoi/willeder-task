import React, { useEffect, useState } from 'react';
import { Navbar } from '../ uielements ';
import { HomeContent, HomeWrapper, Title } from './home.style';
import CardComponent from './card';

const Home = () => {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`
      );
      const result = await response.json();

      setData((prevData: any) => [...prevData, ...result.data]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setIsLoading(false);
  };

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setIsLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handelInfiniteScroll);
    return () => window.removeEventListener('scroll', handelInfiniteScroll);
  }, []);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <HomeContent>
      <Navbar />
      <HomeWrapper>
        {data && data.length > 0
          ? data?.map((item: any, index: number) => <CardComponent data={item} key={index} />)
          : null}
        {isLoading && <Title>Loading...</Title>}
      </HomeWrapper>
    </HomeContent>
  );
};

export default Home;
