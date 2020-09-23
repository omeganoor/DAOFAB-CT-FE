import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.css']
})
export class ParentListComponent implements OnInit {

  parents=[
    {id: 1, sender: 'Mark', receiver: 'Otto', totalAmount: 100, totalPaidAmount: 50},
    {id: 2, sender: 'Jacob', receiver: 'Thornton', totalAmount: 200, totalPaidAmount: 150},
    {id: 3, sender: 'Larry', receiver: 'the Bird', totalAmount: 50, totalPaidAmount: 10},
    {id: 4, sender: 'Larry', receiver: 'the Bird', totalAmount: 50, totalPaidAmount: 10},
    {id: 5, sender: 'Mark', receiver: 'Otto', totalAmount: 100, totalPaidAmount: 50},
    {id: 6, sender: 'Jacob', receiver: 'Thornton', totalAmount: 200, totalPaidAmount: 150},
    {id: 7, sender: 'Larry', receiver: 'the Bird', totalAmount: 50, totalPaidAmount: 10},
    {id: 8, sender: 'Larry', receiver: 'the Bird', totalAmount: 50, totalPaidAmount: 10},
    {id: 9, sender: 'Mark', receiver: 'Otto', totalAmount: 100, totalPaidAmount: 50},
    {id: 10, sender: 'Jacob', receiver: 'Thornton', totalAmount: 200, totalPaidAmount: 150},
    {id: 11, sender: 'Mark', receiver: 'Otto', totalAmount: 100, totalPaidAmount: 50},
    {id: 12, sender: 'Jacob', receiver: 'Thornton', totalAmount: 200, totalPaidAmount: 150}
  ];
  offset = 0;
  size = 2;
  lastOffset = this.size;
  totalSize = this.parents.length;
  parentData = [];
  ascDir = false;


  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    var len = Number(this.totalSize) - Number(this.offset) < this.size ? 
    Number(this.totalSize) - Number(this.offset): this.size;
    for (let i = 0; i < len; i++) {
      this.parentData[i] = this.parents[i+this.offset];
    }    
    console.log(this.parentData)
  }

  handlePageSizeChange(event) {
    this.size = event.target.value <= this.totalSize ? event.target.value : this.totalSize;
    console.log("new size : ", this.size)
    this.parentData.splice(0, this.size);
    this.offset = 0;
    this.lastOffset = this.size;
    this.ngOnInit()
  }

  onNext($event){    
    console.log("Next button is clicked!", $event); 
    var offset = Number(this.offset) + Number(this.size);
    var lastOffset = Number(this.lastOffset) + Number(this.size);
    this.parentData.splice(0, Number(this.size));
    this.lastOffset = lastOffset > this.totalSize ? this.totalSize : lastOffset;
    this.offset = offset;
    console.log(offset, this.offset, lastOffset, this.lastOffset, this.size)
    this.ngOnInit()
  }

  onPrev($event){    
    console.log("Prev button is clicked!", $event);    
    this.offset = Number(this.offset) - Number(this.size) < 0 ? 0 : Number(this.offset) - Number(this.size);
    this.lastOffset = Number(this.lastOffset) - Number(this.size) < Number(this.size)? Number(this.size) : Number(this.lastOffset) - Number(this.size);
    this.parentData.splice(0, this.size);
    this.ngOnInit()
  }

  onFirst($event){   
    console.log("Prev button is clicked!", $event);     
    this.offset = 0;
    this.lastOffset = this.size;
    this.parentData.splice(0, this.size);
    this.ngOnInit()
  }

  onLast($event){    
    console.log("Prev button is clicked!", $event); 
    this.offset = this.totalSize - this.size;
    this.lastOffset = this.totalSize;
    this.parentData.splice(0, this.size);
    this.ngOnInit()   
  }

  onShort($event){   
    console.log("short button is clicked!", $event);  
    if(this.ascDir){
      this.parents.sort(function(a, b){return a.id - b.id});
    }else{
      this.parents.sort(function(a, b){return b.id - a.id});
    }
    this.ascDir = !this.ascDir;
    this.parentData.splice(0, this.size);
    this.ngOnInit()   
  }
}
