import BarChart from "../components/barChart";

function Monitor() {
   const bars = [
      { labels: 'Label 1', level1: [0,30], level2: [0,50], level3: [0,80], level4: [0,100] },
      { labels: 'Label 2', level1: 45, level2: 10, level3: 20, level4: 25 },
      { labels: 'Label 3', level1: 15, level2: 25, level3: 30, level4: 30 },
      { labels: 'Label 4', level1: 15, level2: 25, level3: 30 },
      
   ];
   return (
      <div className="Monitor">
         <BarChart bars = {bars}/>
      </div>
   );
}

export default Monitor;