import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const Contact =() => {

    const shoot = () => {
        alert("Message sent Sucesfully!")
      }

  return (
    <body>
    <div class="container mt-5 mb-5">
      <div class="text-center">
      <img className="UNYN-BLUE-LOGO" alt="Unyn BLUE LOGO" src="https://c.animaapp.com/br51vrAp/img/unyn-blue-logo-01-1@2x.png" />
      </div>
        <h1 class="text-center"><b>Fill Details to Join</b></h1>
        <div class="mx-auto">
        <div class="col-md-6 mt-3 mb-3">
        <div class = "rounded mx-auto d-block">
            
            <div class="card">
                
                <div class="card-body">

                    <form method="post" action="/send" >
                        <div class="mb-3">
                            <label for="name">Name</label>
                            <input type="text" id ="from" name="from" placeholder="Enter your name" class="form-control" required/>
                            
                        </div>
                        <div class="mb-3">
                            <label for="email">Email</label>
                            <input type="text" id= "to" name="to" placeholder="Enter your email" class="form-control" required />
                            
                        </div>
                        <div class="mb-3">
                            <label for="subject">Phone Number</label>
                            <input type="text" id="subject"name="subject" placeholder="Enter your phonenumber" class="form-control" required/>
                            
                        </div>
                        <div class="mb-3">
                            <label for="message">College</label>
                            <input id="message" name="message" class="form-control" placeholder="Enter your College name" required></input>
                            
                        </div>
                        <Link to = "/Home">
                        <button type="submit" class="btn btn-success" value="Send" onClick={shoot} >Send Message</button>
                        </Link>
                    </form>

                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
    </body>
  )
}

export default Contact