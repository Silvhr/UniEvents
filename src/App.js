import logo from './logo.svg';
import {useState} from 'react';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css';
import './App.css';

function App() {
 const [date, setDate] = useState(new Date())

return (
 <div className="app">
   <div className="calendar-container">
     <Calendar onChange={setDate} value={date}/>
   </div>
   <div className="text-center">
      Selected date: {date.toDateString()}
   </div>
 </div>
  )

}

export default App;