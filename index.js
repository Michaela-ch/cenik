const selectPlan = (planNumber) => {
    document.querySelectorAll('.plan').forEach(plan => plan.classList.remove('plan--selected'));
    document.querySelector(`#${planNumber}`).classList.add('plan--selected')
}

selectPlan("plan2")
selectPlan("plan3")