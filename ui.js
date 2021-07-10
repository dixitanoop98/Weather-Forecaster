class UI{
    constructor(){
        this.location=document.querySelector('#w-location');
        this.desc=document.querySelector('#w-desc');
        this.string=document.querySelector('#w-string');
        this.icon=document.querySelector('#w-icon');
        this.humidity=document.querySelector('#w-humidity');
        this.wind=document.querySelector('#w-wind');
        this.dewpoint=document.querySelector('#w-dewpoint');
        this.feelsLike=document.querySelector('#w-feels-like');
        this.details=document.querySelector('#w-details');
        
    }
    paint(weather){
        this.location.textContent=`${weather.name},${weather.sys.country}`;
        this.desc.textContent=weather.weather[0].main;
        this.string.textContent=`${weather.main.temp} C (${Math.ceil((((9*weather.main.temp)/5)+32)*100)/100} F)`;
        this.humidity.textContent=`Relative Humidity: ${weather.main.humidity}%`;
        this.wind.textContent=`Wind Speed: ${weather.wind.speed} M/S`
        this.feelsLike.textContent=`Feels Like: ${weather.main.feels_like}`;
        //this.icon.setAttribute('src',weather.weather[0].icon);
        this.dewpoint.textContent=weather.weather[0].description;
        //console.log(this.desc)
    }
}