import { Component, OnInit } from '@angular/core';
import { ArraySumPairsService } from './service/array-sum-pairs.service';
import { ArrayInBuildService } from './service/array_inbuild';
import { DynamicProgramming } from './service/DP';
import { LinkListService } from './service/link-list.service';
import { MergeArrayProblemService } from './service/merge-array-problem.service';
import { SearchService } from './service/search-service';
import { SortService } from './service/sort.service';
import { StackService } from './service/stack-service';
import { TypeGuardService } from './service/type-guard';

@Component({
  selector: 'app-data-structure',
  templateUrl: './data-structure.component.html',
  styleUrls: ['./data-structure.component.scss'],
})
export class DataStructureComponent implements OnInit {
  constructor(private service: DynamicProgramming) {}

  ngOnInit(): void {
    let str1 = 'rtgh';
    let str2 = 'andrtgh';
    console.log(this.service.lcsTINC(str1, str2, str1.length, str2.length));
    console.log(this.service.lcsSINC(str1, str2, 0, 0));
    console.log(this.service.lcsDynamicP(str1, str2, str1.length, str2.length));
    console.log(
      this.service.lcsDynamicPPrint(str1, str2, str1.length, str2.length)
    );
  }
}
