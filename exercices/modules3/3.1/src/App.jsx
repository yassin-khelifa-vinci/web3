import { useState } from 'react'
import Statistics from './Statistics'

const Loading = () => <div>Loading...</div>;

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [loading, setLoading] = useState(true)

  setTimeout(() => setLoading(false), 3000)

  if (loading) return <Loading />

  return (
    <div>
        <h2>give feedback</h2>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
        <Statistics {...{good, neutral, bad}}/>
    </div>
  )
}

export default App