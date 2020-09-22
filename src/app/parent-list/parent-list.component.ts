import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.css']
})
export class ParentListComponent implements OnInit {

  parents: any = [
    {id: 1, sender: 'Mark', receiver: 'Otto', totalAmount: 100, totalPaidAmount: 50},
    {id: 2, sender: 'Jacob', receiver: 'Thornton', totalAmount: 200, totalPaidAmount: 150},
    {id: 3, sender: 'Larry', receiver: 'the Bird', totalAmount: 50, totalPaidAmount: 10},
    {id: 4, sender: 'Larry', receiver: 'the Bird', totalAmount: 50, totalPaidAmount: 10},
  ];
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

}
