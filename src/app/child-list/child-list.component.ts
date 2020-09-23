import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChildListService } from 'src/app/child-list/child-list.service';


@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.css']
})
export class ChildListComponent implements OnInit {
  childs : any;
  id = 0;
  totalSize = 0;
  // childs: any = [
  //   {id: 1, sender: 'Mark', receiver: 'Otto', totalAmount: 100, paidAmount: 50},
  //   {id: 2, sender: 'Jacob', receiver: 'Thornton', totalAmount: 200, paidAmount: 150},
  //   {id: 3, sender: 'Larry', receiver: 'the Bird', totalAmount: 50, paidAmount: 10},
  //   {id: 4, sender: 'Larry', receiver: 'the Bird', totalAmount: 50, paidAmount: 10},
  // ];
  constructor(
    private route: ActivatedRoute,
    private childService : ChildListService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log("request param : ", params)
      this.id = +params.get('parentId');
    });
    console.log("parentId :",this.id);
    this.retrieveChildDataByParentId()
  }

  retrieveChildDataByParentId() {
    
    this.childService.getByParentId(this.id)
      .subscribe(
        response => {
          this.childs = response;
          this.totalSize = this.childs.length;
          console.log("response :",response)
          console.log(this.childs)
          console.log(this.totalSize)
        },
        error => {
          console.log(error);
        });
  }

}
