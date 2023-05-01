import React, { useState, useEffect } from "react";

function Form5RoomForm({ length = 1, form5Constructor }) {
  const [status, setStatus] = useState(false);
  const [changeRoomData, setChangeRoomData] = useState(false);
  const [info, setInfo] = useState({
    RoomImg: "",
    RoomName: "",
    OriginalPricePerNight: "",
    Discount: "",
    About: "",
    Amenities: "",
    Inclusions: "",
  });

  const {
    RoomImg,
    RoomName,
    OriginalPricePerNight,
    Discount,
    About,
    Amenities,
    Inclusions,
  } = info;

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const target = event.target;
    const value =
      target.type === "file" ? Array.from(target.files) : target.value;
    const name = target.name;

    setInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (
      RoomName !== "" ||
      Amenities !== "" ||
      Inclusions !== "" ||
      OriginalPricePerNight !== "" ||
      Discount !== "" ||
      About !== "" ||
      RoomImg.length !== 0
    ) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };

  const handleInfo = (event) => {
    event.preventDefault();
    const validationErrors = {};

    if (RoomName.trim() === "") {
      validationErrors.RoomName = "Enter your room's name";
    }

    if (Amenities.trim() === "") {
      validationErrors.Amenities = "Enter your amenities";
    }
    if (Inclusions.trim() === "") {
      validationErrors.Inclusions = "Enter your inclusions";
    }

    if (OriginalPricePerNight === "") {
      validationErrors.OriginalPricePerNight = "Enter the room's price";
    } else if (
      !/^[0-9]*$/.test(OriginalPricePerNight.trim().replace(/\s+/g, ""))
    ) {
      validationErrors.OriginalPricePerNight = "Only numeric characters";
    }

    if (Discount === "") {
      validationErrors.Discount = "Enter the room's discount";
    } else if (!/^[0-9]*$/.test(Discount.trim().replace(/\s+/g, ""))) {
      validationErrors.Discount = "Only numeric characters";
    }

    if (About.trim() === "") {
      validationErrors.About = "enter your room's description";
    } else if (About.replace(/\s+/g, "").length > 100) {
      validationErrors.hoteldescription =
        "Please give us a shorter description";
    }

    if (RoomImg.length < 1) {
      validationErrors.RoomImg = "Please upload, at least, one picture";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setChangeRoomData(true);
      form5Constructor(
        "RoomImg",
        RoomName,
        OriginalPricePerNight,
        Discount,
        About,
        Amenities,
        Inclusions
      );
      // setErrors({});
      // setInfo({})
    }
  };

  return (
    <>
      <div className="dividing-ctn">
        <div className="dividing-line"></div>
      </div>
      <form
        onSubmit={handleInfo}
        action=""
        className="CreateHotel--subHotel Ctn__Form5"
      >
        <div className="RoomCreator__header">
          <h3>Room [#]</h3>
          <div>
            <button
              className="manage__status"
              disabled
              style={{
                backgroundColor: !status
                  ? "rgb(204, 197, 8)"
                  : "rgb(8, 204, 106)",
              }}
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              {!status ? "Not Complete ◉" : "Completed ✔"}
            </button>
            <button
              className="manage__del"
              onClick={(event) => {
                event.preventDefault();
              }}
            >
              Delete 🞮
            </button>
          </div>
        </div>

        <div className="line_Ctn">
          <div className="HotelCreator__form--line">
            <label className="HotelCreator__label" htmlFor="RoomName">
              Room name:
            </label>
            <input
              id="inp1"
              className="HotelCreator__input"
              type="text"
              placeholder="Write your room's Name"
              name="RoomName"
              onChange={handleChange}
              value={RoomName}
            />
          </div>
          {errors.RoomName && (
            <span className="error-creatorAdmin"> {errors.RoomName} </span>
          )}
        </div>

        <div className="line_Ctn">
          <div className="HotelCreator__form--line">
            <label className="HotelCreator__label" htmlFor="roonAmenities">
              Add Amenities:
            </label>
            <input
              id="inp2"
              className="HotelCreator__input"
              type="text"
              placeholder="Write your room's amenities (at least 2 use commas)"
              name="Amenities"
              onChange={handleChange}
              value={Amenities}
            />
          </div>
          {errors.Amenities && (
            <span className="error-creatorAdmin"> {errors.Amenities} </span>
          )}
        </div>

        <div className="line_Ctn">
          <div className="HotelCreator__form--line">
            <label className="HotelCreator__label" htmlFor="Inclusions">
              Add Inclusions:
            </label>
            <input
              id="inp3"
              className="HotelCreator__input"
              type="text"
              placeholder="Write your room's Inclusions (at least 2 use commas)"
              name="Inclusions"
              onChange={handleChange}
              value={Inclusions}
            />
          </div>
          {errors.Inclusions && (
            <span className="error-creatorAdmin"> {errors.Inclusions} </span>
          )}
        </div>

        <div className="line_Ctn">
          <div className="HotelCreator__form--line">
            <label
              className="HotelCreator__label"
              htmlFor="OriginalPricePerNight"
            >
              Room's Price:
            </label>
            <input
              id="inp4"
              className="HotelCreator__input"
              type="number"
              placeholder="Write your room's price"
              name="OriginalPricePerNight"
              onChange={handleChange}
              value={OriginalPricePerNight}
            />
          </div>
          {errors.OriginalPricePerNight && (
            <span className="error-creatorAdmin">
              {" "}
              {errors.OriginalPricePerNight}{" "}
            </span>
          )}
        </div>

        <div className="line_Ctn">
          <div className="HotelCreator__form--line">
            <label className="HotelCreator__label" htmlFor="Discount">
              Room's discount:
            </label>
            <input
              id="inp5"
              className="HotelCreator__input"
              type="number"
              placeholder="Write your room's discount"
              name="Discount"
              onChange={handleChange}
              value={Discount}
            />
          </div>
          {errors.Discount && (
            <span className="error-creatorAdmin"> {errors.Discount} </span>
          )}
        </div>

        <div className="line_Ctn">
          <div className="HotelCreator__form--line">
            <label className="HotelCreator__label" htmlFor="About">
              Room's description:
            </label>
            <input
              id="inp5"
              className="HotelCreator__input"
              type="text"
              placeholder="Write your room'sgi description"
              name="About"
              onChange={handleChange}
              value={About}
            />
          </div>
          {errors.About && (
            <span className="error-creatorAdmin"> {errors.About} </span>
          )}
        </div>

        <div className="line_Ctn">
          <div className="HotelCreator__form--line">
            <label className="HotelCreator__label" htmlFor="RoomImg">
              Add Room Image:
            </label>
            <input
              className="HotelCreator__input"
              type="file"
              name="RoomImg"
              accept="image/png, image/jpeg, image/jpg"
              multiple
              onChange={handleChange}
            />
          </div>
          {errors.RoomImg && (
            <span className="error-creatorAdmin"> {errors.RoomImg} </span>
          )}
        </div>

        <div className="addRoom">
          <button 
          // disabled={length > 3 ? true : false}
          >Create Room 🞧</button>
        </div>
      </form>
    </>
  );
}

export default Form5RoomForm;
