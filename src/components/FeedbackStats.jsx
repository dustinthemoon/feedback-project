import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
const FeedbackStats = () => {
  // const handleAverage = () => {
  //   let sum = 0
  //   for (let i = 0; i < feedback.length; i++) {
  //     sum+=feedback[i].rating  
  //   }
  //   return sum/(feedback.length)
  // console.log(feedback[0].rating)
  // }
  const {feedback} = useContext(FeedbackContext)
  let average = feedback.reduce((acc,cur) =>(acc+cur.rating),0)/feedback.length
  average = average.toFixed(1).replace(/[.,]0$/,'')
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average)?0:average}</h4>
    </div>
  )
}


export default FeedbackStats