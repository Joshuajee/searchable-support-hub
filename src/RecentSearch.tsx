import { Result, useAnswersState } from '@yext/answers-headless-react';


const RecentSearch = () => {

  const answers = useAnswersState(state => state);
  const verticals = answers?.universal?.verticals;
  let results: Array<Result> = [] 


  if(verticals) {
    results = verticals[0]?.results
  } 

  return (
        <div className='results'>

            {

                results?.map((result: Result, index: number) => {

                    const { rawData } = result

                    const { question, answer } = rawData

                    return (
                        <article key={index} className="result">
                            <h3 className="title"> {question} </h3> 
                            <div className="body"> {answer}</div>
                        </article>
                    )

                })
            }

        </div>
     
    );

}

export default RecentSearch