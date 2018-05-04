import { Component, OnInit,Input,Output,SimpleChanges } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {FormControl} from '@angular/forms';
 import{ dropdownList }  from './dropdownList';

 export class User {
  constructor(public name: string) { }
}
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})

export class DropdownComponent implements OnInit {

  //@Input() options:any;
  @Input() placeholder: any;
  public filteroptions:any;
  public Inputplaceholder:any;
  myControl: FormControl = new FormControl();
  
 // placehoder="pick"
    // options = [
    //   'One',
    //   'Two',
    //   'Three'
    //  ];
 
    //  options = [
    //   new User('Mary'),
    //   new User('Shelley'),
    //   new User('Igor')
    // ];
  options:dropdownList[]=[];
  
  dropdownvalueList = [
    {id:'1',name:'One'},
    {id: '2',name:'Two'},
    {id:'3',name:'three'}

   ];

    
    constructor() {
     
     
     }
   
  filteredOptions: Observable<dropdownList[]>;
    
    ngOnInit() {
      console.log(this.placeholder)
      this.Inputplaceholder=this.placeholder;
     //console.log(this.options)
      this.dropdownvalueList.forEach((data)=>{
        let  optionslist:any={
          id:data.id,
          name:data.name
         }
         this.options.push(optionslist)
              });
      this.filteredOptions = this.myControl.valueChanges
        .pipe(
          startWith<string | dropdownList>(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this.filter(name) : this.options.slice())
        );
    }
  
    
    filter(name: string): dropdownList[] {
      return this.options.filter(option =>
        option.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }
  
    displayFn(user?: dropdownList): string | undefined {
      return user ? user.name : undefined;
    }
    }  
    
    