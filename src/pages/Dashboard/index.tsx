import Header from "../../components/Header";
import NoTopics from "../../components/NoTopics";
import SearchBar from "../../components/SearchBar";
import TopicsNavBar from "../../components/TopicsNavBar";
import Topic from "../../components/Topic";

import {Container} from './styles'
import { ITopic } from "../../models/topic";
import { useCallback, useEffect, useState } from "react";

const mockTopics: ITopic[] =[
  {
    id: 7,
    title: 'Como emitir nota fiscal em Cobol?',
    authorAvatar: 'AVATAR6',
    authorName: 'Fulano da Silva Sauro',
    answers: 3,
  },
  {
    id: 5,
    title: 'Como varrer uma lista em JS?',
    authorAvatar: 'AVATAR3',
    authorName: 'Ciclano de Azevedo',
    answers: 5,
  },
  {
    id: 8,
    title: 'Como subir um tomcat?',
    authorAvatar: '',
    authorName: '',
    answers: 16,
  },
  {
    id: 9,
    title: 'Qual a vantagem do servless?',
    authorAvatar: 'AVATAR9',
    authorName: 'Ota Pessoa',
    answers: 4,
  }
]


const Dashboard = () => {
  const [topics, setTopics] = useState([] as ITopic[])

  const getTopics = useCallback(() => {
    // TODO: PEGAR DA API
    setTopics(mockTopics);
  },[]);

  useEffect(()=>{
    getTopics();
  },[])

  return (
    <>
      <Header />
      <Container>
        <SearchBar />
        <TopicsNavBar />
        {topics.map(topic =>
          <Topic topic={topic} />)
        }
        {topics.length === 0 && <NoTopics />}
      </Container>
    </>
  );
};

export default Dashboard;
