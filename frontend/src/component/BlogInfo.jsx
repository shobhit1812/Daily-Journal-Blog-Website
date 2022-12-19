import moment from "moment"
import React, { useEffect } from "react"
import { Card, Col, Image, Row } from "react-bootstrap"
import { MdDateRange } from "react-icons/md"
import { TiPencil } from "react-icons/ti"
import { useDispatch, useSelector } from "react-redux"
import { getUserInfo } from "../store/actions/userAction"

const BlogInfo = ({ detail }) => {
  const dispatch = useDispatch()
  const { info, loading } = useSelector((state) => state.userInformation)

  useEffect(() => {
    try {
      dispatch(getUserInfo(detail.userId))
    } catch (error) {
      console.log(error)
    }
  }, [dispatch, detail])

  var date = moment(detail.date).format("DD-MM-YYYY")

  return (
    <>
      {loading ? (
        ""
      ) : (
        <>
          {" "}
          <div className='mt-2'>
            <h2 style={{ color: "#374151" }}>{detail.title}</h2>

            <h6 style={{ display: "flex", justifyContent: "space-between" }}>
              {" "}
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <TiPencil /> {info ? info.name : ""} ( {info ? info.email : ""}{" "}
                )
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <MdDateRange />
                {date ? date : ""}
              </div>
            </h6>

            <Card className='p-2 mb-5'>
              <Row>
                <Col
                  sm={12}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Image
                    src={detail.picture}
                    alt='alt'
                    style={{
                      height: "300px",
                      width: "100%",
                      objectFit: "cover",
                      objectPosition: "0 50%",
                    }}
                  />
                </Col>
                <Col sm={12} className='mt-3'>
                  {detail.desc}
                </Col>
              </Row>
            </Card>
          </div>
        </>
      )}
    </>
  )
}

export default BlogInfo
