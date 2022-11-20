function compute(){
    console.clear();
    var d1 = document.getElementById("day1").value
    var d2 = document.getElementById("day2").value
    var d3 = document.getElementById("day3").value
    var d4 = document.getElementById("day4").value
    var d5 = document.getElementById("day5").value
    
    document.getElementById("day1").disabled = true
    document.getElementById("day2").disabled = true
    document.getElementById("day3").disabled = true
    document.getElementById("day4").disabled = true
    document.getElementById("day5").disabled = true

    if(d1==""){
        alert("Please enter an input for Day 1.")
        document.getElementById("day1").disabled = false
        document.getElementById("day2").disabled = false
        document.getElementById("day3").disabled = false
        document.getElementById("day4").disabled = false
        document.getElementById("day5").disabled = false
        document.getElementById("day1").focus();
        
    }
    else if (d2==""){
        alert("Please enter an input for Day 2.")
        document.getElementById("day1").disabled = false
        document.getElementById("day2").disabled = false
        document.getElementById("day3").disabled = false
        document.getElementById("day4").disabled = false
        document.getElementById("day5").disabled = false
        document.getElementById("day2").focus();
    }
    else if (d3==""){
        alert("Please enter an input for Day 3.")
        document.getElementById("day1").disabled = false
        document.getElementById("day2").disabled = false
        document.getElementById("day3").disabled = false
        document.getElementById("day4").disabled = false
        document.getElementById("day5").disabled = false
        document.getElementById("day3").focus();
    }
    else if (d4==""){
        alert("Please enter an input for Day 4.")
        document.getElementById("day1").disabled = false
        document.getElementById("day2").disabled = false
        document.getElementById("day3").disabled = false
        document.getElementById("day4").disabled = false
        document.getElementById("day5").disabled = false
        document.getElementById("day4").focus();
    }
    else if (d5==""){
        alert("Please enter an input for Day 5.")
        document.getElementById("day1").disabled = false
        document.getElementById("day2").disabled = false
        document.getElementById("day3").disabled = false
        document.getElementById("day4").disabled = false
        document.getElementById("day5").disabled = false
        document.getElementById("day5").focus();
    }
    
    var sum = parseInt(d1) + parseInt(d2) + parseInt(d3) + parseInt(d4) + parseInt(d5)
    console.log("sum: " + sum)
    var avg = parseInt(sum) / 5
    console.log("average: " + avg)
    console.log("farenheit converted to celsius: " + ((avg - parseInt(32)) * 5 / 9))
    document.getElementById("average").value = ((avg - parseInt(32)) * 5 / 9) + "°C"
}

function cleartxt(){
    console.clear();
    document.getElementById("day1").value = ""
    document.getElementById("day2").value = ""
    document.getElementById("day3").value = ""
    document.getElementById("day4").value = ""
    document.getElementById("day5").value = ""
    document.getElementById("average").value = ""

    document.getElementById("day1").disabled = false
    document.getElementById("day2").disabled = false
    document.getElementById("day3").disabled = false
    document.getElementById("day4").disabled = false
    document.getElementById("day5").disabled = false
    return;
}