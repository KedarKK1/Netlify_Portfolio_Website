import { Col, Layout, Row, Card, Input, Button, Modal, Form, Spin } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import React, { useState } from 'react';
import FooterHeader from '../../components/Layout/FooterHeader';
import NavbarHeader from '../../components/Layout/NavbarHeader';
import "./FunPage.css";
// import firebase from '../../firebase';
import { db } from "../../firebase";
import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore"
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import firebase from "firebase/compat/app";
// require('firebase/database');
// import firestore from "firebase/compat/firestore";

const FunPage = () => {

    // let myMemeImgSrc = [
    //     "https://preview.redd.it/x7kxi9gtuuw71.jpg?auto=webp&s=f4659fbc4bb621034c3940e878be3cfb0fbbb61d",
    //     "https://i.chzbgr.com/thumb800/16763397/h0B023285/funny-memes-programming-memes-developers-coding-memes-coder-coding-nerdy-memes-memes-java-memes",
    // ]

    const [setImg, setSetImg] = useState([]);
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);
    const [editMemeId, setEditMemeId] = useState('');
    const [editMemeUrl, setEditMemeUrl] = useState('');
    const theme = useSelector((state)=>state.themeReducer);

    const myBackgroundColor = theme.theme !== "light" ? "#222831" : "";
    const myTextcolor = theme.theme === "light" ? "black" : "white";
    const myCardColor = theme.theme !== "light" ? "black" : "";
    // const [modalText, setModalText] = useState(['id remains same']);
    // const modalText = ['id remains same'];
    const showModal = (id, imgUrl) => {
        // console.log("id ", id);
        // console.log("imgUrl ", imgUrl);
        setEditMemeId(id);
        setEditMemeUrl(imgUrl);

        setVisible(true);
    }
    // const handleOk = () => {
    //     setModalText('The modal will be closed after two seconds');
    //     setLoading(true);
    //     setTimeout(() => {
    //       setVisible(false);
    //       setLoading(false);
    //     }, 2000);
    // }
    const handleCancel = () => {
        // console.log('Clicked cancel button');
        setEditMemeId('');
        setEditMemeUrl('');
        setVisible(false);
    };
    // const onFinish = (values) => {
    //     // console.log('Success:', values);
    // };
    // const onFinishFailed = (errorInfo) => {
    //     // console.log('Failed:', errorInfo);
    // };

    // const createMeme = async () =>
    // {
    //     const getData = await getDocs()
    // }

    // function getImages()
    // {
    //     setLoading(true);
    //     /* get() you "retrieve the content of a single document" only once.
    //      use the onSnapshot() method When you set a listener, Cloud Firestore sends your listener an initial snapshot of the data, and then another snapshot each time the document changes
    //     */
    //     myRef.onSnapshot((querySnapShot)=>{
    //         const items = [];
    //         querySnapShot.forEach((doc)=>{
    //             items.push(doc.data());
    //         });
    //         setSetImg(items);
    //         setLoading(false);
    //     })
    // }

    // function getImages2()
    // {
    //     setLoading(true);
    //     myRef.get().then((item)=>{
    //         let items = item.docs.map((doc) => doc.data());
    //         setSetImg(items);
    //         setLoading(false);
    //     })
    // }

    // const memeColletionRef = collection( db, "Image_URL's");
    const memeColletionRef = collection(db, "Image_URL's",)
    const [writeMemeUrl, setwriteMemeUrl] = useState("");
    let noOfCards = 0

    const createMeme = async () => {
        // setCreateMemeId(noOfCards)
        // console.log(noOfCards)
        await addDoc(memeColletionRef, { imgUrl: writeMemeUrl, id: noOfCards, })
        window.location.reload();
        // console.log(createMemeId)
    }
    const deleteMeme = async (id) => {
        const userDoc = doc(db, "Image_URL's", id);
        await deleteDoc(userDoc);
        window.location.reload();
    }
    const updateMeme = async (id) => {
        const url = doc(db, "Image_URL's", id);
        console.log(url);
        await updateDoc(url, {
            // imgUrl: writeMemeUrl //this is value set in firebase database
            imgUrl: editMemeUrl //this is value set in firebase database
        })
        window.location.reload();
    }

    useEffect(() => {
        // getImages();
        // alternate method to get memes below
        const getMemes = async () => {
            setLoading(true);

            //     db.collection("Image_URL's").get()
            // .then(function(querySnapshot) {
            //     querySnapshot.forEach(function(doc) {
            //         // doc.data() is never undefined for query doc snapshots
            //         console.log(doc.id, " => ", doc.data());
            //     });
            // })
            // .catch(function(error) {
            //     console.log("Error getting documents: ", error);
            // });

            const data = await getDocs(collection(db, "Image_URL's",)).catch(function(error) {
                    console.log("Error getting documents: ", error);
                });
            // console.log(data);
            setSetImg(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            setLoading(false);
        }
        getMemes();

    }, [])


    // const myRef = firebase.firestore().collection("Image_URL's");
    // console.log(myRef);

    if (loading) {
        // return <h1>Loading...</h1>
        return <div className="myLoader"><Spin size="large" /></div>;
    }

    return (
        <>
            <Helmet>
                <title>Fun Page</title>
                <meta name="fun page" content="fun page share memes" />
            </Helmet>

            <NavbarHeader />
            <Layout>
                <Content style={{backgroundColor: myBackgroundColor}}>
                    <h3 style={{ marginTop: 15, color: myTextcolor }}>
                        <u>Welcome to my Meme Page</u>
                    </h3>
                    <Row>
                        <Col className="my-3" xxl={1} xl={1} lg={1} xs={2} md={2} sm={2} />
                        <Col className="my-3" xxl={16} xl={16} lg={16} xs={20} md={20} sm={20} >
                            <Input type="text" placeholder="Enter Url" onChange={(event) => { setwriteMemeUrl(event.target.value) }} />
                        </Col>
                        <Col className="my-3" xxl={0} xl={0} lg={0} xs={2} md={2} sm={2} />
                        <Col className="my-3" xxl={0} xl={0} lg={0} xs={2} md={2} sm={2} />
                        <Col className="my-3" xxl={6} xl={6} lg={6} xs={20} md={20} sm={20} >
                            <Button type="primary" onClick={createMeme}>Create Meme</Button>
                        </Col>
                        <Col className="my-3" xxl={1} xl={1} lg={1} xs={2} md={2} sm={2} />
                    </Row>
                    <Row>

                        {/* {myMemeImgSrc.map((imgSrc)=>{
                            
                            return <>
                                <Col className="my-3" xxl={1} xl={1} lg={1} xs={2} md={2} sm={2} />
                                <Col className="my-3" xxl={6} xl={6} lg={6} xs={20} md={20} sm={20} >
                                    <Card>
                                        <img src={imgSrc} className="memeImg" alt="alt" />
                                    </Card>
                                </Col>
                                <Col className="my-3" xxl={1} xl={1} lg={1} xs={2} md={2} sm={2} />
                            </>
                        })} */}
                        {/* <InfiniteScroll
                            dataLength={setImg.length}
                            next={fetchMoreData}
                            hasMore={setImg.length !== state.tottalResult}
                            loader={<h4>Loading...</h4>}
                        > */}

                        {setImg.map((imgSrc) => {
                            return <>
                                <Col className="my-3" xxl={1} xl={1} lg={1} md={1} sm={1} xs={2} />
                                <Col className="my-3" xxl={6} xl={6} lg={6} md={10} sm={10} xs={20} >
                                    <Card bodyStyle={{ backgroundColor: myCardColor}}>
                                        <p style={{ display: 'none' }}> {noOfCards++}</p>
                                        <img key={imgSrc.id} src={imgSrc.imgUrl} className="memeImg" alt={imgSrc.imgUrl} />
                                        <Button type="primary" block style={{ marginTop: "10px" }} onClick={()=>showModal(imgSrc.id, imgSrc.imgUrl)}>Edit</Button>
                                        <Modal
                                            title="Title"
                                            visible={visible}
                                            onOk={() => { updateMeme(imgSrc.id) }}
                                            confirmLoading={loading}
                                            onCancel={handleCancel}
                                        >
                                            {/* <p>{modalText}</p> */}
                                            {/* <Form initialValues={{ "ImageUrl": imgSrc.imgUrl }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" > */}
                                            <Form autoComplete="off" >
                                                <Form.Item
                                                    label="ImageUrl"
                                                    // name="ImageUrl"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please input your ImageUrl!',
                                                        },
                                                    ]}
                                                >
                                                    {/* <Input value="writeMemeUrl" onChange={(event) => { setwriteMemeUrl(event.target.value) }} /> */}
                                                    <Input id={editMemeId} value={editMemeUrl} onChange={(e) => {setEditMemeUrl(e.target.value); }} />
                                                </Form.Item>

                                                {/* <Form.Item
                                                    label="Id"
                                                    name="id"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please input your Id!',
                                                        },
                                                    ]}
                                                >
                                                    <Input.Password />
                                                </Form.Item> */}
                                            </Form>
                                        </Modal>
                                        <Button type="danger" block style={{ marginTop: "10px" }} onClick={() => { deleteMeme(imgSrc.id) }} >Delete</Button>
                                    </Card>
                                </Col>
                                <Col className="my-3" xxl={1} xl={1} lg={1} md={1} sm={1} xs={2} />
                            </>
                        })}

                        {/* </InfiniteScroll> */}
                        { }
                    </Row>
                </Content>
            </Layout>

            <FooterHeader />

            <ScrollToTopButton />
        </>
    )
}

export default FunPage