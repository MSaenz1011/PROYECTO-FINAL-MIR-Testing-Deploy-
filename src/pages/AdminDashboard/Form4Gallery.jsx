import React, { useState } from "react";
import axios from "axios";

function Form4Gallery({ setFormTab, formTab, scrollToTop, form4Constructor }) {
  const DB_URL = process.env.REACT_APP_BACKEND_URL;
  const [files, setFiles] = useState("");
  const [errors, setErrors] = useState({});
  const [render, setRender] = useState(false);

  const handleFile = (event) => {
    const fileList = event.target.files;
    const filesArray = Array.from(fileList);
    setFiles(filesArray);
  };

  const handleInfo = async (event) => {
    event.preventDefault();
    const validationErrors = {};

    if (files.length <= 1) {
      validationErrors.filesempty = "Please add, at least, one file";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      
      const data = new FormData();
      for (let i = 0; i < files.length; i++) {
        data.append(`file:${i}`, files[i], files[i].name);
      }

      const response = await axios.post(
          `${DB_URL}/test-formdata`,
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
          );
          
          setRender(true);
          const Gallery = Object.values(response.data).join('-//-');
          console.log(Gallery);
          
          form4Constructor(Gallery)
          
          
          setFormTab(5);
        }
        // setFiles([]);
        setErrors({});
  };

  return (
    <form
      action=''
      onSubmit={handleInfo}
      className='CreateHotel--subHotel CH__form4'
    >
      <div className='line_Ctn'>
        <div className='HotelCreator__form--line'>
          <label className='HotelCreator__label' htmlFor='inp6'>
            Add new images:
          </label>
          <input
            type='file'
            name='hotelFront'
            accept='image/png, image/jpeg, image/jpg'
            multiple
            onChange={(event) => handleFile(event)}
          />
        </div>
        {errors.filesempty && (
          <span className='error-creatorAdmin'>{errors.filesempty}</span>
        )}
      </div>

      <div className='HotelForm__footer'>
        <button
          className='HotelCreator__form--microSubmit'
          onClick={(event) => {
            setFormTab(3);
            scrollToTop();
          }}
        >
          🡸
        </button>
        Step {formTab} / 5
          <button
            className='HotelCreator__form--microSubmit'
            onClick={(event) => {
              handleInfo(event)
              scrollToTop();
            }}
          >
            🢂
          </button>
      </div>
    </form>
  );
}

export default Form4Gallery;
