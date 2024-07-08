import Shape from './components/Shape.tsx'
import ShapeMyAnswer from './components/ShapeMyAnswer.tsx'
import './App.css'


const BOX_DATA = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]

function App() {

  return (
    <>
      <a href='https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbV9EX192TTJRNDl6dk10SGxPcVhHQ1MtMG5WQXxBQ3Jtc0tuQ0dHSjF4NVJMeXl4Qlh3S2NBWWI0S2FJNDM3ZHRYMF9ybjV4U3pGeGNXNmdfN3RLWGtHYVdvUGl0TzJHbk54VWpRdnljMlJ4UHU0MlBCLUhHY1hRV013bkZsdFhxbEMydWFubWl0NmRVbGJ1RkFpdw&q=https%3A%2F%2Fdevtools.tech%2Fquestions%2Fs%2Fhow-to-create-an-interactive-shape-based-ui-uber-frontend-interview-question-or-javascript-or-react-js---qid---6FVH1ZMWMXd4uZ8WAGEi&v=DCoIeGt4g7M'>Link to Question</a>
      <Shape data={BOX_DATA}/>
      <ShapeMyAnswer data={BOX_DATA}/>
    </>
  )
}

export default App
