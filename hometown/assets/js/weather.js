   
      $(document).ready(function(){
                
        // var city = kotdwar;
        var key  = '959c31afc0e9313b59b290d20984ccc0';
        
        $.ajax({
          url:'http://api.openweathermap.org/data/2.5/weather',
          dataType:'json',
          type:'GET',
          data:{q:'kotdwar',appid: key, units: 'metric'},

          success: function(data){
            var wf = '';
            $.each(data.weather, function(index, val){

              wf += '<b>' + data.name + "</b>  "+ data.main.temp + '&deg;C ' + 
              ' | ' + val.main;
            });
          
           $(".ShowWeatherForcast").html(wf);
          }

        })

  })(jQuery);