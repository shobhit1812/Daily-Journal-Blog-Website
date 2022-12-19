import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Button, Container, Form, Image } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Header from "../component/Header"
import { postBlog } from "../store/actions/blogAction"

const initialPost = {
  title: "",
  desc: "",
  picture: "",
  userId: "",
  category: "",
}

const dropdownData = [
  {
    id: 1,
    type: "Tech",
  },
  {
    id: 2,
    type: "Music",
  },
  {
    id: 3,
    type: "Games",
  },
  {
    id: 4,
    type: "Sports",
  },
]

const WriteBlog = () => {
  const [post, setPost] = useState(initialPost)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  //getting user data

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    post.userId = userInfo._id
  }, [post, userInfo])

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      console.log("click")
      dispatch(postBlog(post))
      navigate("/home")
    } catch (error) {
      console.log(error)
    }
  }

  const url =
    "https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=972&q=80"
  return (
    <div>
      <Header />
      <Container className='my-1'>
        <div className='group'></div>
        <Image
          src={url}
          alt='banner'
          style={{ width: "100%", height: "40vh" }}
        />

        <Form className='my-2' onSubmit={handleSubmit}>
          <Form.Control
            as='textarea'
            className='mt-2'
            rows={1}
            name='picture'
            placeholder='Banner URL'
            onChange={handleChange}
          />
          <div>
            <Form.Control
              as='textarea'
              className='mt-2'
              rows={1}
              name='title'
              onChange={handleChange}
              placeholder='Title'
            />
            <Form.Group
              controlId='category'
              className='mt-2'
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <label className='mx-1'> Category : </label>
              {dropdownData.map((item) => (
                <Form.Check
                  key={item.id}
                  value={item.type}
                  type='radio'
                  name='category'
                  label={item.type}
                  onChange={handleChange}
                />
              ))}
            </Form.Group>
          </div>

          <Form.Control
            as='textarea'
            className='mt-2'
            rows={5}
            name='desc'
            onChange={handleChange}
            placeholder='lorem ipsum...'
          />
          <Button className='mt-2' type='submit'>
            Publish
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default WriteBlog
