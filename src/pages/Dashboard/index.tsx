import Header from "../../components/Header";
import NoTopics from "../../components/NoTopics";
import SearchBar from "../../components/SearchBar";
import TopicsNavBar from "../../components/TopicsNavBar";

import {Container} from './styles'

const Dashboard = () => {
  return (
    <>
      <Header />
      <Container>
        <SearchBar />
        <TopicsNavBar />
        <NoTopics />
      </Container>
    </>
  );
};

export default Dashboard;
