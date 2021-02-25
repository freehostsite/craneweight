
function getData(){
  let data = $("#spanArea").serializeArray();
  let span = data[0].value
  let height = data[1].value
  let width = data[2].value
  let sidePlate = data[3].value
  let topPlate = data[4].value
  let bottomPlate = data[5].value
  let noOfBeams = data[6].value

  // Mass Calculations For Beams

  // Side Plate Mass
  var sidePlateMass = sidePlate * (span / 1000) * (height / 1000) * 7.85 * 2

  // Top Plate Mass
  var topPlateMass = topPlate * (span / 1000) * (width / 1000) * 7.85
  // Bottom Plate Mass
  var bottomPlateMass = bottomPlate * (span / 1000) * (width / 1000) * 7.85

  // Ribs Mass
  var noOfRibs = Math.floor(span / 1000 * 1.5)
  var ribsMass = sidePlate * (height / 1000) * (width / 1000) * 7.85 * noOfRibs

  var totalMass = ((sidePlateMass + topPlateMass + bottomPlateMass + ribsMass) * noOfBeams).toFixed(3);

  document.getElementById('resultSpan').innerHTML = "Total Weight is " + totalMass + " kg";
}

function getDataEC(){
  let dataEC = $("#ECArea").serializeArray();
  let spanEC = dataEC[0].value
  let heightEC = dataEC[1].value
  let widthEC = dataEC[2].value
  let sidePlateEC = dataEC[3].value
  let topPlateEC = dataEC[4].value
  let bottomPlateEC = dataEC[5].value
  let noOfEC = dataEC[6].value

  // Mass Calculations For End Carriages

  // Side Plate Mass
  var sidePlateMassEC = sidePlateEC * (spanEC / 1000) * (heightEC / 1000) * 7.85 * 2

  // Top Plate Mass
  var topPlateMassEC = topPlateEC * (spanEC / 1000) * (widthEC / 1000) * 7.85
  // Bottom Plate Mass
  var bottomPlateMassEC = bottomPlateEC * (spanEC / 1000) * (widthEC / 1000) * 7.85

  // Ribs Mass
  var noOfRibsEC = Math.floor(spanEC / 1000 * 2)
  var ribsMassEC = sidePlateEC* (heightEC/ 1000) * (widthEC / 1000) * 7.85 * noOfRibsEC

  var totalMassEC = ((sidePlateMassEC + topPlateMassEC + bottomPlateMassEC + ribsMassEC) * noOfEC).toFixed(3);

  document.getElementById('resultEC').innerHTML = "Total Weight is " + totalMassEC + " kg";
}
