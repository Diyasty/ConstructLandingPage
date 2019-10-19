import { Component, OnInit} from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  constructor( ) { }

  ngOnInit()  :void{
  	$(document).ready(() => {
    	$('.counter-value').each(function () {
    		;
    		$(this).prop('el',0).animate(
    			//
    			{
    				el : $(this).text()
    			},
    			{
    			duration:8000,
    			easing:'linear',
    			//
    			step : function (now) {
    			$(this).text(Math.ceil(now));
    		},
    		  complete: function() {

    			$(this).text();
  }
    		//
    	}
    		//
    	);
    });
      $(".links a").click(function (e) {
        $(this).addClass('active').siblings().removeClass("active");

                  var name = $(this).attr('data-filter');
          console.log(name);
        if (name==="all") {
               $('.filter').show("2000")
                       }
                       else {

                        $('.filter').not("."+name).hide("2000");
                        $('.filter').filter("."+name).show("2000");


                       }
        })

      });
  	}



}


