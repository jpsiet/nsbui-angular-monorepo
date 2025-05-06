import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { SearchService } from '../operators/search-service';



@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  searchInput: UntypedFormControl;
  constructor(private searchService: SearchService) {
    this.searchInput = new UntypedFormControl('abc');
    this.searchSubjectLogic();
    this.searchControlLogic();
  }

  searchControlLogic() {
    this.searchInput.valueChanges.subscribe( (value: string)=>{
      console.log("search value" + value);
    })
    // observable subject way to get search form data
    this.searchService.searchData(this.$searchTerm).subscribe( (data: any) => {
      if (data && data.hasOwnProperty('query')) {
        this.SearchData = data['query']['search'];
      }
    },((error: any) =>{
      console.log(error);
    })

    );
  }
  searchSubjectLogic() {
    // observable subject way to get search form data
    this.searchService.searchData(this.$searchTerm).subscribe((data: any) => {
      if (data && data.hasOwnProperty('query')) {
        this.SearchData = data['query']['search'];
      }
    });
  }
  SearchData = [];
  Searchtext = ' Search a text';
  $searchTerm = new Subject<string>();

  ngOnInit(): void {}

  handleKeyChange(event: any) {
    this.$searchTerm.next(event.target.value);
  }
}
