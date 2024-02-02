

const Results = ({ total, positive, good, neutral, bad }) => {
  
  return (
    <div>

      <ul>
        <li>
          <h3> Good : {good}</h3>
          <h3> Neutral : {neutral}</h3>
          <h3> Bad : {bad}</h3>
          <h3>Total:{total}</h3>
          <h3>Positive Feedback:{positive}%</h3>
        </li>
      </ul>
    </div>
  );
};


export default Results;