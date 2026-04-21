import React from "react";
import Navbar from '../components/navbar/Navbar';
function New_Bucket() {
    return (
        <div>
            <Navbar activePage="Home" />
                <form class="container col-8 col-lg-11 col-xxl-12 mt-4 d-grid gap-0 row-gap-3" action="/overview">
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
                    <button href="#" type="submit" class="btn btn-primary text-black mb-5">View Bucket</button>
                </div>
            </form>
        </div>
    );
}

export default New_Bucket;