import Spreadsheet from "react-spreadsheet";

function App() {
  const data = [];

  for (let i = 0; i < 20; i++) {
    const columnData = [];

    for (let j = 0; j < 20; j++) {
      var obj = {
        value: "",
      };

      columnData.push(obj);
    }

    data.push(columnData);
  }

  return <Spreadsheet data={data} />;
}

export default App;
