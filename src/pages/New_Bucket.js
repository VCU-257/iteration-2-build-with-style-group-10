import React from "react";

function New_Bucket() {
    return (
        <div>
            //Desktop Version
            <nav class="navbar navbar-expand-md navbar-light bg-light border-bottom d-none d-md-flex">
                <div class="container">
                    <a class="navbar-brand" href="../index.html">Budget Buckets</a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><a class="nav-link text-secondary" href="transactions.html"><i
                                class="bi bi-currency-dollar"></i> Transactions</a></li>
                            <li class="nav-item"><a class="nav-link text-secondary" href="connections.html"><i
                                class="bi bi-people"></i> Connections</a></li>
                            <li class="nav-item"><a class="nav-link text-primary" href="../index.html"><i
                                class="bi bi-house-door-fill"></i> Home</a></li>
                            <li class="nav-item"><a class="nav-link text-secondary" href="profile.html"><i
                                class="bi bi-person-square"></i> Profile</a></li>
                            <li class="nav-item"><a class="nav-link text-secondary" href="settings.html"><i
                                class="bi bi-gear-wide-connected"></i> Settings</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="container-fluid bg-secondary text-center text-white" style="height: 25px">
                <div class="row">
                    <div class="col h-100">
                        New Bucket
                    </div>
                </div>
            </div>

            //Mobile Navbar
            <div class="d-flex d-md-none fixed-bottom bg-light border-top text-center fs-5">
                <a href="transactions.html" class="flex-fill py-2"><i
                    class="bi bi-currency-dollar text-secondary"></i></a>
                <a href="connections.html" class="flex-fill py-2"><i
                    class="bi bi-people text-secondary"></i></a>
                <a href="../index.html" class="flex-fill py-2"><i
                    class="bi bi-house-door-fill text-primary"></i></a>
                <a href="profile.html" class="flex-fill py-2"><i
                    class="bi bi-person-square text-secondary"></i></a>
                <a href="settings.html" class="flex-fill py-2"><i
                    class="bi bi-gear-wide-connected text-secondary"></i></a>
            </div>
            <form class="container col-8 col-lg-11 col-xxl-12 mt-4 d-grid gap-0 row-gap-3" action="overview.html">
                <div>
                    <label for="inputName" class="form-label">Bucket Name</label>
                    <input type="text" class="form-control" id="inputName" />
                </div>
                <div>
                    <label for="savingReason" class="form-label">What are you saving for?</label>
                    <input type="text" class="form-control" id="savingReason" />
                </div>
                <div>
                    <label for="goalAmount" class="form-label">Total Bucket Goal</label>
                    <input type="number" class="form-control" id="goalAmount" min="1" />
                </div>
                <div>
                    <label for="deadline" class="form-label">Bucket Deadline</label>
                    <input type="date" id="deadline" class="form-control" />
                </div>
                <div class="form-check">
                    <label class="form-check-label" for="equalContribution">Is everyone contributing equally?</label>
                    <input class="form-check-input" type="checkbox" value="" id="equalContribution" />
                </div>
                <div class="form-check">
                    <label class="form-check-label" for="allowAnonContributions">Allow anonymous contributions?</label>
                    <input class="form-check-input" type="checkbox" value="" id="allowAnonContributions" />
                </div>
                <div>
                    <label for="participants" class="form-label">Add Participants</label>
                    <input type="text" class="form-control" id="participants" />
                    <input type="text" class="form-control mt-3" id="participants"/>
                    <div>
                        <p><a href="#">Send Invite Link for New Users</a></p>
                    </div>
                    <button href="#" type="submit" class="btn btn-secondary text-white mb-5">View Bucket</button>

                </div>
            </form>
        </div>
    );
}

export default New_Bucket;