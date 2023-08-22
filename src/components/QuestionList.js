import React,{useState,useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, setQuestions}) {
  
  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(data => setQuestions(data))
  },[])
  function handleDeleteItem(deletedItem) {
    const updatedItems = questions.filter((item) => item.id !== deletedItem.id);
    setQuestions(updatedItems);
  }

  
  return (
    <section>
      <h1>Quiz Questions</h1>
      {questions.map((question) =>{
        return  (<ul>
          <QuestionItem key={question.id} question={question} onDeleteItem={handleDeleteItem}/>
        </ul>)

      })}
     
    </section>
  );
}

export default QuestionList;
