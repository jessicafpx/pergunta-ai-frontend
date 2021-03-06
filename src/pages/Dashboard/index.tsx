import Header from "../../components/Header";
import NoTopics from "../../components/NoTopics";
import SearchBar from "../../components/SearchBar";
import Topic from "../../components/Topic";

import {Container} from './styles'
import { ITopic } from "../../models/topic";
import { useCallback, useEffect, useState } from "react";
import api from "../../services/api";

const Dashboard = () => {
  const [allTopics, setAllTopic] = useState([] as ITopic[]);
  const [filtredTopics, setFiltredTopics] = useState([] as ITopic[]);

  const getTopics = useCallback(async () => {
    try {
      const { data: topicsList } = await api.get('topics');
      setAllTopic(topicsList);
      setFiltredTopics(topicsList);
    } catch (err) {
      console.log(err)
    }
  },[setAllTopic, setFiltredTopics]);

  useEffect(()=>{
    getTopics();
  },[])

  const searchTopicsCallback = useCallback (( searchValue, selectedTag ) => {
    let filtredResult = allTopics;

    if (selectedTag !== 'Todas categorias') filtredResult = filtredResult.filter((topic: ITopic) => topic.tags.includes(selectedTag));

    if (searchValue) filtredResult = filtredResult.filter((topic: ITopic) => topic.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));

    setFiltredTopics(filtredResult);
  }, [allTopics]);

  const filterTopicsCallback = useCallback ((value: string) => {
    if (value === 'Todas categorias') return setFiltredTopics(allTopics);

    const filtredResult = allTopics.filter((topic: ITopic) => topic.tags.includes(value));
    setFiltredTopics(filtredResult);
  }, [allTopics, filtredTopics]);

  const navSelectCallback = useCallback ((value: string) => {
    switch(value){
      case 'Todos':
        setFiltredTopics(allTopics);
      break;
      case 'Respondidos': {
        const filtredResult = allTopics.filter((topic: ITopic) => topic.totalOfAnswers>0);
        setFiltredTopics(filtredResult);
        break;
      }
      case 'Abertos': {
        const filtredResult = allTopics.filter((topic: ITopic) => topic.status!=='CLOSED');
        setFiltredTopics(filtredResult);
        break;
      }
      case 'Fechados': {
        const filtredResult = allTopics.filter((topic: ITopic) => topic.status==='CLOSED');
        setFiltredTopics(filtredResult);
        break;
      }
    };
  }, [allTopics, filtredTopics]);

  return (
    <>
      <Header />
      <Container>
        <SearchBar searchTopics={searchTopicsCallback} filterTopicsByTag={filterTopicsCallback} filterTopicsByNavOption={navSelectCallback}/>
        {filtredTopics.map(topic =>
          <Topic key={topic.id} topic={topic} />)
        }
        {filtredTopics.length === 0 && <NoTopics />}
      </Container>
    </>
  );
};

export default Dashboard;
