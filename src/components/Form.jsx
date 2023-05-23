import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, TileLayer, Popup, CircleMarker, Tooltip } from 'react-leaflet';
import axios from 'axios';
const center=[55.737399, 37.473690]




const Form = () => {
  const { register, handleSubmit, watch,formState:{errors} } = useForm();
  const onSubmit = (data) => {
    axios.post('http://localhost:8000/form', data)
    alert('Application sent')
    console.log(data)

  }

  console.log(watch("firstName", "lastName"));
  
  return (
    <div>
        <form id="form" onSubmit={handleSubmit(onSubmit)}>
          <h1>Fill out the feedback form</h1>
          <div class="input-group mb-3">
          <input {...register("firstName", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} 
          type="text"
          className='form-control'
          placeholder="First Name"/>
          {errors?.firstName?.type==='required' && <span>This field is required</span>}
          {errors?.firstName?.type==='maxLength' && <span>This field can't be more than 20 symbols</span>}
          {errors?.firstName?.type==='pattern' && <span>This field is filled incorrectly</span>}
          </div>

          <div class="input-group mb-3">
          <input {...register("lastName", { maxLength: 20, pattern: /^[A-Za-z]+$/i })} 
          type="text"
          className='form-control'
          placeholder="Last Name"/>
          {errors?.lastName?.type==='maxLength' && <span>This field can't be more than 20 symbols</span>}
          {errors?.lastName?.type==='pattern' && <span>This field is filled incorrectly</span>}
          </div>

          <div class="input-group mb-3">
          <input {...register("patronymic", { maxLength: 20, pattern: /^[A-Za-z]+$/i })} 
          type="text"
          className='form-control'
          placeholder="Patronymic"/>
          {errors?.patronymic?.type==='maxLength' && <span>This field can't be more than 20 symbols</span>}
          {errors?.patronymic?.type==='pattern' && <span>This field is filled incorrectly</span>}
          </div>

          <div class="input-group mb-3">
          <input {...register("email", {required:true, maxLength: 30, pattern: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/i })} 
          type="text"
          className='form-control'
          placeholder="Email"/>
          {errors?.email?.type==='required' && <span>This field is required</span>}
          {errors?.email?.type==='maxLength' && <span>This field can't be more than 30 symbols</span>}
          {errors?.email?.type==='pattern' && <span>This field is filled incorrectly</span>}
          </div>
          <input className='btn btn-outline-primary' type="submit" />
        </form>
        <br />
        <MapContainer
        center={center}
          zoom={10}
          style={{width:'100vw', height:'900px'}}
          >
          <TileLayer
          url='https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=eF7STD3MF5k0xziaZFBp'
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          />
          <CircleMarker
          center={center}
          pathOptions={{color:'black'}}
          radius={10}
          />
          <Marker position={center}>
            <Popup>
                We are here
            </Popup>
            <Tooltip>Hover</Tooltip>
          </Marker>
        </MapContainer>
    </div>
      );
}

export default Form