const DataDisplayComponent = ({ data }) => (
  <div>
    <h1>Data from API</h1>
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  </div>
);
