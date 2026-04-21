import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useBucket } from "../context/BucketContext";
function Dashboard() {
    const { bucketName } = useBucket();
    return (
        <div>
            <Navbar />
            <div class="container col-lg-11 col-xxl-5 mt-4 d-grid row-gap-3">
                <Link to="/overview" style={{ textDecoration: "none", color: "inherit" }}>
                <div class="card" style={{ height: "150px", cursor: "pointer" }}>
                    <div class="row h-100 g-0 d-flex my-auto">
                        <div class="col-md-4 d-flex justify-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '75px', width: '75px' }} fill="currentColor" class="bi bi-bucket-fill d-flex align-self-center" viewBox="0 0 16 16">
                                <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5m1.005 0a4.5 4.5 0 0 1 8.945 0z" />
                            </svg>
                        </div>
                        <div class="col-md-8 align-self-start">
                            <div class="card-body">
                                <h5 class="card-title">{bucketName}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                </Link>

                <div class="card" style={{ height: "150px" }}>
                    <div class="row h-100 g-0 d-flex my-auto">
                        <div class="col-md-4 d-flex justify-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '75px', width: '75px' }} fill="currentColor" class="bi bi-bucket-fill d-flex align-self-center" viewBox="0 0 16 16">
                                <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5m1.005 0a4.5 4.5 0 0 1 8.945 0z" />
                            </svg>
                        </div>
                        <div class="col-md-8 align-self-start">
                            <div class="card-body">
                                <h5 class="card-title">Bucket Name</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card" style={{ height: "150px" }}>
                    <div class="row h-100 g-0 d-flex my-auto">
                        <div class="col-md-4 d-flex justify-content-center">
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '75px', width: '75px' }} fill="currentColor" class="bi bi-bucket-fill d-flex align-self-center" viewBox="0 0 16 16">
                                <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5m1.005 0a4.5 4.5 0 0 1 8.945 0z" />
                            </svg>
                        </div>
                        <div class="col-md-8 align-self-start">
                            <div class="card-body">
                                <h5 class="card-title">Bucket Name</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="new_bucket" class="btn btn-primary ">New
                    Bucket</a>
            </div>
        </div>
    );
}

export default Dashboard;