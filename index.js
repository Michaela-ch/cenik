const selectPlan = (planNumber) => {
    document.querySelectorAll('.plan').forEach(plan => plan.classList.remove('plan--selected'));
    document.querySelector(`#plan${planNumber}`).classList.add('plan--selected')
}

selectPlan(2)
selectPlan(3)