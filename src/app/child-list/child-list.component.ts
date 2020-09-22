import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css']
})
export class ChildListComponent implements OnInit {
  child;
  childs: any = [
    {id: 1, sender: 'Mark', receiver: 'Otto', totalAmount: 100, paidAmount: 50},
    {id: 2, sender: 'Jacob', receiver: 'Thornton', totalAmount: 200, paidAmount: 150},
    {id: 3, sender: 'Larry', receiver: 'the Bird', totalAmount: 50, paidAmount: 10},
    {id: 4, sender: 'Larry', receiver: 'the Bird', totalAmount: 50, paidAmount: 10},
  ];
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log("request param : ",params)
      this.child = this.childs[+params.get('parentId')];
    });
    console.log("child :",this.child);
  }
  

}
