/* eslint-disable react/prop-types */

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = all !== 0 ? (good - bad) / all : 0
  const positive = all !==0 ? (good / all) * 100 :0
  if (all === 0) {
        return (
        <div>
            <h2>statistics</h2>
            <p>No feedback given</p>
        </div>
        )
    }

  return (
    <div>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}

export default Statistics