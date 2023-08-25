Webcam.set({

    width:350,
    height:300,
    image_format:"png",
    png_quality:90
  })
  
  Webcam.attach("#camera")
  
  function snapshot(){
   Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = "<img id='capimg' src = '" + data_uri + "'>"
   })
  }
  
  console.log("ml5 version :", ml5.version)
  
  classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/q4P3OSnuB/model.json", modelloaded)
  
  function modelloaded(){
    console.log("model loaded")
  }