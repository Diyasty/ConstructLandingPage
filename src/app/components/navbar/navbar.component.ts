import { Component, OnInit  } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(()=>{
       $('#navbarSupportedContent li a').click(function() {

    $('#navbarSupportedContent li a').removeClass('active');
    $(this).addClass('active');

});

       $('.searchLink a').click(()=>{
         $('#inPut').toggle().css('margin-right','5px');
       })


      });
  }
}



