"use client"
import React from 'react'
import InfiniteMovingCards from './infinite-moving-cards'

const feedbackItems = [
  {
    id: 1,
    title: "Jane Cooper",
    description: "This is amazing! The animations are smooth and the design is beautiful.",
    job: "Product Manager",
    date: "March 2024"
  },
  {
    id: 2,
    title: "John Smith",
    description: "Fantastic work on this component. Really impressed with the attention to detail.",
    job: "Software Engineer",
    date: "February 2024"
  },
  {
    id: 3,
    title: "Sarah Wilson",
    description: "The infinite scroll effect is mesmerizing. Great job on the implementation!",
    job: "UX Designer",
    date: "January 2024"
  }
];

function Feedback() {
  return (
    <InfiniteMovingCards items={feedbackItems} speed={35} />
  )
}

export default Feedback