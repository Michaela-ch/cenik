// const selectPlan = (planNumber) => {
//     document.querySelector("#plan2").classList.add('plan--selected')
// }

// selectPlan(plan2)

// const removePlan = (planNumber) => {
//     document.querySelectorAll('.plan').classList.remove('plan--selected')
// }

const removePlan = () => {
    const plans = document.querySelectorAll('.plan');
    plans.forEach(plan => plan.classList.remove('plan--selected'));
}


const selectPlan = (planNumber) => {
document.querySelector(`#${planNumber}`).classList.add('plan--selected')
}

removePlan()

selectPlan("plan2")
