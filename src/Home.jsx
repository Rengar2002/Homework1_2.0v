import React,{useState} from 'react';
import Select from"./Select";
import Posts from"./Posts";
import "./style/Home.css";

const Home = () => {

const [date,setDate] = useState({year:null,month:null});

const [posts] = useState([
  {id:0,year:"2023",month:"Январь",events:"ДР",description:"День рождения у ФИО. 18 января в 15:30 в кафе `Снежинка`"},
  {id:1,year:"2022",month:"Февраль",events:"Свадьба",description:"Свадьба у ФИО. Нужно 19 февраля в 12:00 быть по Адресу `ул.Коммунальная 5, 36 квартира`"},
  {id:2,year:"2021",month:"Март",events:"Сходка интровертов",description:"Посидеть дома и подумать. Почему ты один и не можешь найти друзей и попасть в депресию"},
  {id:3,year:"2020",month:"Август",events:"Праздник",description:"Традиция. 18 Августа необходимо поехать в Суворовку  и пожать руку Вити."},
  {id:4,year:"2019",month:"Декаберь",events:"Спячка",description:"С 12 декабря до 18 декабря побывать в спячке"},
]);



const getDate=(year,month)=>{
  setDate({year:year,month:month});

}

const ungetdate=(year,month)=>{
  setDate({year:null,month:null});
}
   

let filteredPosts= posts;

if(date.month && date.year) filteredPosts = posts.filter((post)=>post.month===date.month && post.year === date.year);


  return (
    <div>
      <Select onClick ={getDate} inhandler={ungetdate}/>
      {
      date.year===null && date.month=== null?posts.map((post)=><Posts id={post.id} value={post.year} keys={post.month} name ={post.events} description={post.description} key={post.events}/>):filteredPosts && filteredPosts.map((post)=>
      <Posts id={post.id} value={post.year} keys={post.month} name ={post.events} key={post.events} description={post.description}/>)
      }
    </div>
  )
}

export {Home}


