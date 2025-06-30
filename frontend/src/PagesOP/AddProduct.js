import React, { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../assets/css/addproduct.css';
import useFetch from '../ApiOP/useFetch';
import { OPTextBox } from '../ComponentOP/OPTextBox';
import { OPButton } from '../ComponentOP/OPButton';
import TextArea from '../ComponentOP/TextArea';

export const AddProduct = () => {
  const [images, setImages] = useState([]);
  const [startInit, setStartInit] = useState(true);
  const [startRender, setStartRender] = useState(false);
  const [value, setValue] = useState("");
  const [rerender, setRerener] = useState("");


  const buttonRef = useRef(null)
  const ctl_Attribute = useRef(null)

  const { responseData, isLoadingApi, apiKey, fetchError, serverRequest } = useFetch();


  function initiControl() {
    const ctl_array = [
      {
        /*login:Product : 0*/
        arrayindex: 0,
        csstheme: {
          labletext: "Product",
          classname: "form-control",
          id: "txt_loginid",
          inputtype: "text",
          length: 50,
          readonly: false,
          hinttext: "Enter your Product",
        },
        inputvalue: "",
        tooltip: {
          place: "bottom",
          classname: "tooltip-react",
          isfocus: "",
          isvalidation: false,
        },
        validate: {
          mandatory: true,
          datatype: "default",
        },
        error: {
          errorshow: false,
          errormsg: "The field is mandatory",
        },
      },
      {
        /*login:Price : 1*/
        arrayindex: 1,
        csstheme: {
          labletext: "Price",
          classname: "form-control",
          id: "txt_price",
          inputtype: "number",
          length: 10,
          readonly: false,
          hinttext: "Enter your Price",
        },
        inputvalue: "",
        tooltip: {
          place: "bottom",
          classname: "tooltip-react",
          isfocus: "",
          isvalidation: false,
        },
        validate: {
          mandatory: true,
          datatype: "default",
        },
        error: {
          errorshow: false,
          errormsg: "The field is mandatory",
        },
      },
      {
        /*login:Qty : 2*/
        arrayindex: 2,
        csstheme: {
          labletext: "Qty",
          classname: "form-control",
          id: "txt_qty",
          inputtype: "number",
          length: 10,
          readonly: false,
          hinttext: "Enter your Qty",
        },
        inputvalue: "",
        tooltip: {
          place: "bottom",
          classname: "tooltip-react",
          isfocus: "",
          isvalidation: false,
        },
        validate: {
          mandatory: true,
          datatype: "default",
        },
        error: {
          errorshow: false,
          errormsg: "The field is mandatory",
        },
      },
      {
        /*login:Discount : 3*/
        arrayindex: 3,
        csstheme: {
          labletext: "Discount",
          classname: "form-control",
          id: "txt_loginid",
          inputtype: "number",
          length: 2,
          readonly: false,
          hinttext: "Enter your Discount",
        },
        inputvalue: "",
        tooltip: {
          place: "bottom",
          classname: "tooltip-react",
          isfocus: "",
          isvalidation: false,
        },
        validate: {
          mandatory: false,
          datatype: "default",
        },
        error: {
          errorshow: false,
          errormsg: "The field is mandatory",
        },
      },
      {
        //ctl : Insert : 4
        arrayindex: 4,
        csstheme: {
          classname: "sib-form-block__button sib-form-block__button-with-loader tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn m-1",
          id: "insert",
          disable: false,
          labletext: "Insert",
        },
      },
      {
        //ctl : Clear : 5
        arrayindex: 5,
        csstheme: {
          classname: "sib-form-block__button sib-form-block__button-with-loader tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn m-1",
          id: "clear",
          disable: false,
          labletext: "Clear",
        },
      },
    ]
    ctl_Attribute.current = ctl_array;
    setStartRender(true);
    setStartInit(false);
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const newImages = files
      .filter((file) => file.type.startsWith('image/'))
      .map((file) => ({
        url: URL.createObjectURL(file),
        imgName: file.name,
      }))
    // Update state with new images
    setImages((prev) => [...prev, ...newImages]);
  }

  function handleOnClickCross(index) {
    setImages((prev) => {
      const updated = [...prev];
      updated.splice(index, 1);
      return updated;
    });
  }

  function handleButtonClick(e) {
    const btn_id = e.currentTarget.id;
    console.log(btn_id)
    switch (btn_id) {
      case "insert":
        fnSetInsert();
        break;
      case "clear":
        fnSetInsert();
        break;
    }
  }
  function fnSetInsert() {
    if (ctl_Attribute.current[0].inputvalue !== "" &&
      ctl_Attribute.current[1].inputvalue !== "" &&
      ctl_Attribute.current[2].inputvalue !== "" &&
      value !== ""
    ) {
      let _getinsertAuth = {
        name: ctl_Attribute.current[0].inputvalue,
        price: ctl_Attribute.current[1].inputvalue,
        qty: ctl_Attribute.current[2].inputvalue,
        discount: ctl_Attribute.current[3].inputvalue !== "" ? ctl_Attribute.current[3].inputvalue : null,
        para: value,
        image: images,
      }
      console.log(_getinsertAuth)
      let serverRequestParam = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(_getinsertAuth),
        apiUrl: "/api/v1/admin-addproduct",
        apikey: "ADDPRO"
      };
      serverRequest(serverRequestParam);
    }
  }
  function fnresponseAddProduct() {
    console.log(responseData)
    if (responseData.isAuth) {
      ctl_Attribute.current[0].inputvalue = "";
      ctl_Attribute.current[1].inputvalue = "";
      ctl_Attribute.current[2].inputvalue = "";
      ctl_Attribute.current[3].inputvalue = "";
      setValue('');
      setImages([]);
      setRerener(!rerender);
    }
  }
  useEffect(() => {
    if (startInit === true) {
      initiControl();
    } else {
      if (isLoadingApi) {
        switch (apiKey) {
          case "ADDPRO":
            fnresponseAddProduct();
            console.log("dsad")
            break;
        }
      }
    }
  }, [startInit, isLoadingApi]);

  return (
    <>
      {startRender &&
        < div className="container-upload" >
          <h2>Add Product</h2>
          <div className='row'>
            <div className="col-3">
              {/* Image Slider */}
              <div
                style={{ height: "265px", border: "1px solid gray", borderRadius: "5px" }}>
                {images.length > 0 ? (
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    loop={true}
                    pagination={{ clickable: true }}
                    className="swiper"
                  >
                    {images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img src={image.url} style={{ width: "100%", height: "100%" }} alt={`Preview ${index}`} className="swiper-img" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <div className='d-flex h-100 text-center flex-column justify-content-center'>
                    <div style={{ fontSize: "16px" }}>Add photo</div>
                    <div style={{ fontSize: "12px" }}>for preview the image</div>
                  </div>
                )}
              </div>
              <div className="row">
                {
                  images.map((img, index) => (
                    <span key={index} className='span'>{img.imgName}<button className='cross-button' onClick={() => handleOnClickCross(index)}><i className="fa-solid fa-xmark"></i></button></span>
                  ))
                }
              </div>

              {/* Upload Button */}
              <label className="custom-file-upload">
                <input
                  ref={buttonRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                  hidden
                />
                Upload Images
              </label>
            </div>
            <div className="col-9">
              <div className="row mt-3">
                <div className="col-6">
                  <div className="mb-3">
                    <OPTextBox
                      ctl_Attribute={ctl_Attribute.current[0]}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <OPTextBox
                      ctl_Attribute={ctl_Attribute.current[1]}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <OPTextBox
                      ctl_Attribute={ctl_Attribute.current[2]}
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3">
                    <OPTextBox
                      ctl_Attribute={ctl_Attribute.current[3]}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <TextArea
                  // row={5}
                  // cols={40}
                  value={value}
                  setValue={setValue}
                />
              </div>
              <div className="row">
                <div className='d-flex justify-content-end mt-2'>
                  <OPButton
                    ctl_Attribute={ctl_Attribute.current[4]}
                    handleButtonClick={handleButtonClick}
                  />
                  <OPButton
                    ctl_Attribute={ctl_Attribute.current[5]}
                    handleButtonClick={handleButtonClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </div >
      }
    </>)
}
