import React, { Component } from "react";
import {nav, navbar, container, col} from "reactstrap";
import "./css/profile.css";

<div class = "profile-pages">
    <nav class="navbar navbar-expand-lg" style="font-size: larger; color: whitesmoke; font-style: normal bold; font-family: Arial, Helvetica, sans-serif;">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">USER PROFILE</a>
            <div class="collapse navbar-collapse" id="navbarSupport   edContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>           
                    </ul>
                    <a class="navbar-brand" href="#">
                        <img src="./assets/avt-01.jpg" alt="" width="30" height="30" class="d-inline-block align-text-top" />
                        John Doe
                    </a>     
            </div>
        </div>
    </nav>
    <div class="user-page" style="padding-top: 10%; font-family: Arial, Helvetica, sans-serif; font-size: medium; color: azure;">
        <div class="container">
            <div class col-3>
                <div class="nama">
                    <h1>John Doe</h1>
                </div>
                <div>
                <div class="border border-success p-2 mb-2 border-opacity-50 username">Id : </div>
                <div class="border border-success p-2 mb-2 border-opacity-50 player">Full Name : </div>
                <div class="border border-success p-2 mb-2 border-opacity-50 score">Game Name : </div>
                <div class="border border-success p-2 mb-2 border-opacity-50 gmail">Password : </div>
                <div class="border border-success p-2 mb-2 border-opacity-50 gmail">Create At : </div>
            </div>
            <div class="history" style="padding-top: 10%; color: azure; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: medium;">
                <table class="table" style="padding-top: 10%; color: azure; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: medium;">
                    <h1>Game History</h1>
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Game Name</th>
                            <th scope="col">Create At</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">325</th>
                            <td>John Doe</td>
                            <td>Rock Paper Scissor</td>
                            <td>10:00</td>
                        </tr>
                        <tr>
                            <th scope="row">325</th>
                            <td>John Doe</td>
                            <td>Rock Paper Scissor</td>
                            <td>10:00</td>
                        </tr>
                        <tr>
                            <th scope="row">325</th>
                            <td>John Doe</td>
                            <td>Rock Paper Scissor</td>
                            <td>10:00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</div>