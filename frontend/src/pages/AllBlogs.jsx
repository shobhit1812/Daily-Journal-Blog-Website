import React from "react"
import { useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getAllBlogs } from "../store/actions/blogAction"
import { ThreeDots } from "react-loader-spinner"
import Message from "../component/Message"
import PostCard from "../component/PostCard"

const AllBlogs = () => {
  const dispatch = useDispatch()

  const blogger = useSelector((state) => state.allBlogs)
  const { blogs, loading, error } = blogger

  useEffect(() => {
    try {
      dispatch(getAllBlogs())
    } catch (error) {
      console.log(error)
    }
  }, [dispatch])

  return (
    <Container className='mt-2'>
      {loading && <ThreeDots color='#EDDFB3' height={80} width={80} />}
      {error && <Message variant='danger' message={error} />}
      <Row>
        {blogs
          ? blogs.map((item) => (
              <Col md={6} sm={12}>
                <PostCard item={item} />
              </Col>
            ))
          : "No Blogs to display"}
      </Row>
    </Container>
  )
}

export default AllBlogs
