class Weather{
    constructor(city,state){
        this.apikeys='33d9d319f73eb25d37cc9ea392ab760d';
        this.city=city;
        this.state=state;
    }
    async getWeather(){
        const response=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=metric&APPID=${this.apikeys}`);

        const responseData=await response.json();
        
        return responseData;
    }
    changeLocation(city,state){
        this.city=city;
        this.state=state;
    }
}