$('document').ready( function() {
    
  

    $('#search').keyup(function () {
        $.getJSON('vehicle.json', function(data){
         
          
           
            var search = $('#search').val();

            if(search === ''){
                $('#filter').html('');
                return;
            }

            var rexp   = new RegExp(search, 'i');


            var output ='<div class ="row" >';
            var count= 1;
        $.each(data.vehicle, function(k,j){
            if((j.type.search(rexp) != -1)  || (j.make.search(rexp) != -1)){
                // $("ul").append("<img src = '" + j.img +"'/>  <br><li> " + j.type + "</li>" );
                // $("ul").append('<li>' + j.make + '</li>'  );
                // $("ul").append ('<li>' + j.model + '</li>'  );
                // $("ul").append('<li>' + j.year + '</li>'  );
                output += '<div class= "vehicles">';
                output += '<img src= "'+ j.img +'" /> ';
                output += '<p>'  + j.type + '</p>';
                output += '<p>'  + j.make + '</p>';
                output += '<p>'  + j.model + '</p>';
                output += '<p>'  + j.year + '</p>';
                output += '<div>';
                if(count%2 == 0){
                    output += '</div><div class="row">'
                   

				  }
                }   

            });
            output += '</div>';
            $('#filter').html(output);
            

        });
    });
    
});