

const ui=new UI;
const storage=new Storage;

const weatherLocation=storage.getLocationData();

//import weather class
const weather=new Weather(weatherLocation.city,weatherLocation.state);

//weather.changeLocation('miami','florida')
document.addEventListener('DOMContentLoaded',getWeather);

//change location
document.querySelector('#w-change-btn').addEventListener('click',()=>{
    const city=document.querySelector('#city').value;
    const state=document.querySelector('#state').value;
    weather.changeLocation(city,state);
    storage.setLocationData(city,state);
    getWeather();


    //jquery to close modal
    $('#locModal').modal('hide');
})

function getWeather(){
    weather.getWeather()
    .then((result)=>{
     ui.paint(result);
    
    })
    .catch((err)=> console.log(err));
}
