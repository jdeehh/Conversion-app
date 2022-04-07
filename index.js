//Measurements//
const ft = 3.28084
const gl = 0.264172
const lb = 2.20462
const met = 0.3048
const lt = 3.78541
const kg = 0.453592

const len = document.getElementById('length')
const vol = document.getElementById('volume')
const mass = document.getElementById('mass')

document.querySelector('input').addEventListener('keyup', function () {
    
    let val = document.querySelector('input').value

    const metFt = parseFloat(val * ft).toFixed(3)
    const ltGl = parseFloat(val * gl).toFixed(3)
    const kgLb = parseFloat(val * lb).toFixed(3)
    const ftMet = parseFloat(val * met).toFixed(3)
    const glLt = parseFloat(val * lt).toFixed(3)
    const lbKg = parseFloat(val * kg).toFixed(3)

    len.innerHTML = `${val} meters = ${metFt} feet | ${val} feet = ${ftMet} meters`
    vol.innerHTML = `${val} liters = ${ltGl} gallons | ${val} gallons = ${glLt} liters`
    mass.innerHTML = `${val} kilos = ${kgLb} pounds | ${val} pounds = ${lbKg} kilos`
})

