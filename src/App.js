import Form from './form/Form';
import Quotes from './quotes/Quotes';
import './App.css';
import React,{useState} from 'react';



const defaultQuotes=[{
  quote:" “Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny.”",
  auther:"Charles",
  publisher:"John"
}, {
  quote: "“Everybody wants to be famous, but nobody wants to do the work. I live by that. You grind hard so you can play hard. At the end of the day, you put all the work in, and eventually it’ll pay off. It could be in a year, it could be in 30 years. Eventually, your hard work will pay off.”",
    auther: "Microsoft",
    publisher: "Erno"
  }, {
  quote: "“Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As with all matters of the heart, you’ll know when you find it.”",
    auther: "Charles",
    publisher: "Wendy"
  }, {
  quote: " “When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.” – John Lennon",
    auther: "Charles",
    publisher: "Hans"
  }, {
  quote: "“I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.” – Michael Jordan",
    auther: "Micheal Jordan",
    publisher: "Dave"
  }]

function App() {
  const [quote,setQuote]= useState(defaultQuotes)
  const [name, setName] = useState({})
  const [error, setError] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (myValidate()){
      setQuote([...quote, name])
      setName({})
      e.target.reset();
    }
    
    
  }
  const onChange=(e)=>{
   
    setName({ ...name, [e.target.name]: e.target.value})
    console.log(name)
  }

  function myValidate() {
  
    if (!name.quote) {
      setError("Quote can't be empty");
      return false;
    }

    if (!name.auther) {
      setError("Auther can't be empty");
      return false;
    }
    if (!name.publisher) {
      setError("Publisher can't be empty");
      return false;
    }else{
      setError("");
       return true;
       
    }

   
  }
  
  return (
    <div className="App">
        <h1>Create your owner Quotes</h1>
      <div className="Content">
        <Form onSubmit={onSubmit} onChange={onChange} name={name} error={error} />
        <Quotes quote={quote} />
        
        </div>
    </div>
  );

}


export default App;
