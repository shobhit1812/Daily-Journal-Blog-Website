import axios from "axios"
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ThreeDots } from "react-loader-spinner"
import { useSelector } from "react-redux"
import Category from "../component/Category"
import Header from "../component/Header"
import PostCard from "../component/PostCard"

const MyBlogs = () => {
  const [loading, setLoading] = useState(false)
  const [myBlogs, setMyBlogs] = useState([])
  const { userInfo } = useSelector((state) => state.userLogin)

  useEffect(() => {
    try {
      setLoading(true)
      const fetchdata = async () => {
        const { data } = await axios.get(
          `https://blogg-backend.onrender.com/api/blog/myblogs/${userInfo._id}`
        )
        setMyBlogs(data)
      }
      fetchdata()
      setLoading(false)
    } catch (error) {
      console.log("Error occured")
    }
  }, [userInfo._id])

  return (
    <div>
      <Header />
      <Container>
        <Category />
        {loading && <ThreeDots color='#EDDFB3' height={80} width={80} />}
        <Row className='mt-2'>
          {myBlogs
            ? myBlogs.map((item) => (
                <Col md={6} sm={12}>
                  <PostCard item={item} />
                </Col>
              ))
            : "No Blogs to display"}
        </Row>
      </Container>
    </div>
  )
}

export default MyBlogs
