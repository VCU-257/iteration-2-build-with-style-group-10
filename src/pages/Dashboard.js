import React from "react";
function Dashboard() {
    return (
        <div>
            <Navbar activePage="Home" />
            <div class="container col-lg-11 col-xxl-5 mt-4 d-grid row-gap-3">
                <div class="card" style="height: 150px">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="..." class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Bucket Name</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card" style="height: 150px">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="..." class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Bucket Name</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card" style="height: 150px">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="..." class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Bucket Name</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="new_bucket.html" class="btn btn-secondary rounded-pill col-11" style="justify-self: center;">New
                    Bucket</a>
            </div>
        </div>
    );
}

export default Dashboard;