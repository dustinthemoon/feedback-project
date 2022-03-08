import React from 'react'
import { useContext, useState, useEffect } from 'react'
import Card from './share/Card'
import Button from './share/Button'
import FeedbackContext from '../context/FeedbackContext' 
import RatingSelect from './RatingSelect'
const FeedbackForm = () => {
  const [text,setText] = useState('')
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState("")
  const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext)
  useEffect(() => {
    if(feedbackEdit.edit) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  },[feedbackEdit])
  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length>10) {
      const newFeedback = {
        text,
        rating,
      }
      if(feedbackEdit.edit) {
        updateFeedback(feedbackEdit.item.id,newFeedback)
      } else {
        addFeedback(newFeedback)
      }
      setText("")
    }
  }
  const handleTextChange = (e) => {
    if(text==="") {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text!=='' && text.trim().length<=10) {
      setMessage("Your feedback need to be at least 10 characters")
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(e.target.value)
  }
  return (
    <Card>
      <form onSubmit={handleSubmit} >
        <h2>What would you rate your service with us?</h2>  
        <RatingSelect select={(rating) => setRating(rating)} />
        {/* @todo - rating select component */}
        <div className="input-group">
          <input onChange={handleTextChange} type="text" placeholder='Write your feedback here' value={text} />  
          <Button type="submit" isDisable={btnDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm