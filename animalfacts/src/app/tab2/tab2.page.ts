import { Component } from '@angular/core';
import { NodeService } from '../node.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  catFactObj : any
  catFacts: any
  catFactsExtra : any

  constructor(private node: NodeService) {  }

  ngOnInit() {
    this.loadCatFacts()
    document.getElementById("catFacts").hidden = true
  }

  loadCatFacts() {
    this.node.catFacts().subscribe(
      data => { 
        this.catFactObj = data
        this.catFacts = this.catFactObj.facts
        this.catFactsExtra = this.catFactObj.extra
      },
      (err: HttpErrorResponse) => { console.log(err.message); }
    );
  }

  showCatFacts() {
    console.log("E")
    document.getElementById("preCats").hidden = true
    document.getElementById("catFacts").hidden = false
  }

  showCatExtra(index) {
    document.getElementById("catHelp").hidden = true
    var element = "catExtra" + index
    document.getElementById(element).innerHTML = this.catFactsExtra[index];
  }


}
