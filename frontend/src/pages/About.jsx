import React from "react"
import { useNavigate } from "react-router-dom"

const About = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h3
        className='m-5'
        onClick={() => navigate("/home")}
        style={{ cursor: "pointer" }}
      >
        Hello! My name is Shobhit Nautiyal I am 22 years old , I was Born in
        Rudraprayag , 18 Dec 2000 and My personality Easy going person and easy
        to find a new friend. I Am Very Interested In The Creative Field , Being
        A Developer Is One Of My Life Goals, With A Talent In This Field I Want
        To Always Learn New Things And Strengthen Every Process. And I am a
        student of Institute of Technology, Gopeshwar. I learn on Web
        Development , and DSA.
      </h3>
    </div>
  )
}

export default About
