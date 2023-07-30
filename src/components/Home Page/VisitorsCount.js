import React from 'react'
// import { Layout, Spin } from 'antd'
import { Spin } from 'antd'
// import { Content } from 'antd/lib/layout/layout'
// import { Col, Layout, Row } from 'antd'
import { db } from "../../firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { useEffect } from 'react';
import { useState } from 'react';

const VisitorsCount = (props) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getVisitorsCountAndUpdateInFirebase = async () => {
      setLoading(true);
      const data = await getDocs(collection(db, "Total_Visits",)).catch(function(error) {
                console.log("Error getting data in visitor count: ", error);
            });;
            // console.log('data',data);
            // console.log("data.docs",data.docs[0]._document.data.value.mapValue.fields.count.integerValue)
            // console.log("data.docs.map((doc) => (doc._document.data.value.mapValue.fields.count.integerValue))",data.docs.map((doc) => (doc._document.data.value.mapValue.fields.count.integerValue)))
          if(data && data.docs && (data.docs.length > 0)) {
            setCurrentNumber(data.docs.map((doc) => (doc._document.data.value.mapValue.fields.count.integerValue)))
          }else{
            setCurrentNumber(0);
          }  
        setLoading(false);
        const url = await doc(db, "Total_Visits", "Current_count");
        await updateDoc(url, {
          count: parseInt(data.docs.map((doc) => (doc._document.data.value.mapValue.fields.count.integerValue))) + 1 //this is value set in firebase database
      })
    }
    
    getVisitorsCountAndUpdateInFirebase();

  },[])
  const textColor = props.textColor.myTextcolor

  if(loading){
    return(
      <>
        <Spin size="large" />
      </>
    )
  }
  return (
    <>
        {/* <Layout> */}
            {/* <Content style={{ paddingTop: 15, backgroundColor: props.color.myBackgroundColor}} data-aos="fade-up" data-aos-anchor-placement="top-bottom"> */}
                <h1 style={{ paddingTop: "15px", backgroundColor: props.color.myBackgroundColor, color: textColor, marginBottom: "0px" }}> <b><u>Total Visits on this page</u></b> </h1>
                <div className="text-center"><b><h4 style={{paddingTop: "15px", backgroundColor: props.color.myBackgroundColor, color: textColor, paddingBottom: "15px", marginBottom: "0px" }}>{currentNumber}</h4></b></div>
            {/* </Content> */}
        {/* </Layout> */}
    </>
  )
}

export default VisitorsCount