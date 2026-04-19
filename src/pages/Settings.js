import React from "react";

function Settings() {
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
                            <li class="nav-item"><a class="nav-link text-secondary" href="../index.html"><i
                                class="bi bi-house-door-fill"></i> Home</a></li>
                            <li class="nav-item"><a class="nav-link text-secondary" href="profile.html"><i
                                class="bi bi-person-square"></i> Profile</a></li>
                            <li class="nav-item"><a class="nav-link text-primary active" href="settings.html"><i
                                class="bi bi-gear-wide-connected"></i> Settings</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="d-flex d-md-none fixed-bottom bg-light border-top text-center fs-5">
                <a href="transactions.html" class="flex-fill py-2"><i
                    class="bi bi-currency-dollar text-secondary"></i></a>
                <a href="connections.html" class="flex-fill py-2"><i
                    class="bi bi-people text-secondary"></i></a>
                <a href="../index.html" class="flex-fill py-2 text-decoration-none text-primary fw-bold"><i
                    class="bi bi-house-door-fill text-secondary"></i></a>
                <a href="profile.html" class="flex-fill py-2"><i
                    class="bi bi-person-square text-secondary"></i></a>
                <a href="settings.html" class="flex-fill py-2"><i
                    class="bi bi-gear-wide-connected text-primary"></i></a>
            </div>

            <div class="container pt-4 pb-5">
                <h1 class="mb-4">Settings</h1>

                <div class="row g-4">

                    //Left Column
                    <div class="col-12 col-lg-8">

                        //Account Information
                        <div class="card mb-4">
                            <div class="card-header">
                                Account Information
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="mb-3">
                                        <label for="fullName" class="form-label">Full Name</label>
                                        <input type="text" class="form-control" id="fullName" placeholder="Amy Orellana" />
                                    </div>

                                    <div class="mb-3">
                                        <label for="emailAddress" class="form-label">Email Address</label>
                                        <input type="email" class="form-control" id="emailAddress" placeholder="amy@example.com" />
                                    </div>

                                    <div class="mb-3">
                                        <label for="phoneNumber" class="form-label">Phone Number</label>
                                        <input type="tel" class="form-control" id="phoneNumber" placeholder="(555) 555-5555" />
                                    </div>

                                    <div class="mb-3">
                                        <label for="password" class="form-label">Change Password</label>
                                        <input type="password" class="form-control" id="password" placeholder="Enter new password" />
                                    </div>
                                </form>
                            </div>
                        </div>

                        //Bank Information
                        <div class="card mb-4">
                            <div class="card-header">
                                Bank Information
                            </div>
                            <div class="card-body">
                                <form>

                                    <div class="mb-3">
                                        <label for="bankSelect" class="form-label">Select Bank Account</label>
                                        <select class="form-select" id="bankSelect">
                                            <option selected>Choose an account</option>
                                            <option>Chase Checking ••••1234</option>
                                            <option>Capital One Savings ••••5678</option>
                                            <option>Discover Credit Card ••••9012</option>
                                        </select>
                                    </div>

                                    <div class="mb-3">
                                        <label for="accountType" class="form-label">Account Type</label>
                                        <select class="form-select" id="accountType">
                                            <option selected>Choose type</option>
                                            <option>Checking</option>
                                            <option>Savings</option>
                                            <option>Credit Card</option>
                                        </select>
                                    </div>

                                    <button type="button" class="btn btn-outline-primary">
                                        Manage Account
                                    </button>

                                </form>
                            </div>
                        </div>

                        //Notifications
                        <div class="card mb-4">
                            <div class="card-header">
                                Notifications
                            </div>
                            <div class="card-body">
                                <div class="form-check form-switch mb-3">
                                    <input class="form-check-input" type="checkbox" id="budgetAlerts" checked />
                                    <label class="form-check-label" for="budgetAlerts">Budget alerts</label>
                                </div>

                                <div class="form-check form-switch mb-3">
                                    <input class="form-check-input" type="checkbox" id="transactionAlerts" checked />
                                    <label class="form-check-label" for="transactionAlerts">Large transaction alerts</label>
                                </div>

                                <div class="form-check form-switch mb-3">
                                    <input class="form-check-input" type="checkbox" id="weeklySummary" />
                                    <label class="form-check-label" for="weeklySummary">Weekly spending summary</label>
                                </div>

                                <div class="form-check form-switch mb-3">
                                    <input class="form-check-input" type="checkbox" id="emailNotifications" checked />
                                    <label class="form-check-label" for="emailNotifications">Email notifications</label>
                                </div>
                            </div>
                        </div>

                        <div class="mb-5">
                            <button type="button" class="btn btn-primary">Save Changes</button>
                            <button type="button" class="btn btn-secondary">Cancel</button>
                        </div>
                    </div>

                    //Right Column
                    <div class="card mb-4">
                        <div class="card-header">
                            Account Actions
                        </div>
                        <div class="card-body">
                            <button type="button" class="btn btn-outline-danger w-100 mb-2">Disconnect Bank</button>
                            <button type="button" class="btn btn-outline-dark w-100">Log Out</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Settings();