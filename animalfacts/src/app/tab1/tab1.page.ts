import { Component } from '@angular/core';
import { NodeService } from '../node.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  dogFactObj : any
  dogFacts: any
  dogFactsExtra : any

  constructor(private node: NodeService) {  }

  ngOnInit() {
    this.loadDogFacts()
    document.getElementById("facts").hidden = true
  }

  loadDogFacts() {
    this.node.dogFacts().subscribe(
      data => { 
        this.dogFactObj = data
        this.dogFacts = this.dogFactObj.facts
        this.dogFactsExtra = this.dogFactObj.extra
      },
      (err: HttpErrorResponse) => { console.log(err.message); }
    );
  }

  showFacts() {
    console.log("E")
    document.getElementById("pre").hidden = true
    document.getElementById("facts").hidden = false
  }

  showExtra(index) {
    document.getElementById("dogHelp").hidden = true
    var element = "extra" + index
    document.getElementById(element).innerHTML = this.dogFactsExtra[index];
  }



}
