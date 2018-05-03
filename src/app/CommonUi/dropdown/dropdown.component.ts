import { Component, OnInit,Input,Output,SimpleChanges } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {FormControl} from '@angular/forms';
 import{ dropdownList }  from './dropdownList';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  //@Input() options:any;
  //@Input()placeholder:any;
  public filteroptions:any;
  public Inputplaceholder:any;
  myControl: FormControl = new FormControl();
  placeholder="pick";
  
    // options = [
    //   'One',
    //   'Two',
    //   'Three'
    //  ];
     options:dropdownList=new dropdownList;

     dropdownList = [
      {id:'1',name:'One'},
      {id:'2',name:'Two'},
      {id:'3',name:'three'}

     ];
    constructor() { }
    filteredOptions: Observable<string[]>;
    
      ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith<string | dropdownList>(''),
            map(value => typeof value === 'string' ? value : value.name),
            map(name => name ? this.filter(name) : this.options.slice())
          );
          console.log("data")
          console.log(this.filteredOptions)
      }
    
      filter(val: string): string[] {
        console.log(val)
        return this.options.filter(option =>
          option.toLowerCase().indexOf(val.toLowerCase()) === 0);
      }
    }  
    
    