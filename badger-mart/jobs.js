function submitApplication(e) {
    e.preventDefault(); // You can ignore this; prevents the default form submission!

    // TODO: Alert the user of the job that they applied for!
    
    const jobs = document.getElementsByName('job');
    let flag = false;
    for (let item of jobs) {
        if (item.checked) {
            flag = true;
            let job = item.value;
            alert("Thank you for applying to be a " + job + "!");
        }
    }
    if (flag == false) {
        alert("Please select a job!");
    }
}