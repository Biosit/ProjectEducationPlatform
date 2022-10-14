import React, { Component } from "react";

export const Formulary = () => (

<>
<div class="container  border-top border-primary " style="max-width: 500px" id="contenedor-formulario">
      <div class="text-center mb-4" id="titulo-formulario">
        
        <h2>WELCOME</h2>
        <p class="fs-5">"4-SCHOOL.."</p>
      </div>

      <div class="mb-3">
            <button type="submit" class=" btn btn-primary w-100 fs-5">LOGIN</button>
          </div>

      <form   method="POST" data-netlify="true" action="#">     
            <div class= "mb-3">           
              <input type="user" class="form-control" id="email" name="email" placeholder="Please insert your user ID"/>
            </div>
 
          
            <div class="mb-3">            
              <input type="input" class="form-control" id="name" name="name" placeholder="Please insert your Password"/>
            </div>
      

            <div class="mb-3">
            <button type="submit" class=" btn btn-primary w-100 fs-5">LOGIN</button>
          </div>

     </form>
  
  </div>
  </>
);
