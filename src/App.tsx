import { AnswersHeadlessProvider } from '@yext/answers-headless-react';
import  SearchBar from './SearchBar';
import RecentSearch from './RecentSearch';

const App = ()  => {

  return (
    <AnswersHeadlessProvider
      apiKey={'Your api key'}
      experienceKey='your experience key'
      locale='en'
    >
      <SearchBar/>
      <RecentSearch/> 
    </AnswersHeadlessProvider>
  );
}

export default App;
