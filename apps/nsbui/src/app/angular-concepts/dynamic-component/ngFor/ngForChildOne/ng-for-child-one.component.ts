import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { DataObservableService } from "../data_observable";
import * as _ from "lodash";
import { ngFAalysisConfigType, ngFWeightType } from "../ngForChildTypes";
import { Subscription } from "rxjs";
import { ngForService } from "../ngForService";




@Component({
  selector: 'ng-for-child-one',
  templateUrl: './ng-for-child-one.component.html',
  styleUrls: ['./ng-for-child-one.component.scss'],
   changeDetection:ChangeDetectionStrategy.OnPush

})
export class NgForChildOne implements OnInit, OnDestroy
  {
    private subscription!: Subscription;

    localData = 0;
    @Input() configAnalysis!: ngFAalysisConfigType;
    weightObj!:ngFWeightType ;
   constructor( private dataObs:DataObservableService, private ngForService:ngForService,
    private cdRef: ChangeDetectorRef){}


   ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    this.subscription.unsubscribe();

    // Clear intervals, detach event listeners, etc.
  }

    ngOnInit( ): void {
      console.log("creating ng for child compponent, inital data",this.configAnalysis);
     this.subscription=  this.dataObs.data$.subscribe( (data: any) =>{
        this.weightObj=  _.cloneDeep(data);
        console.log(" from observale data ");
        this.checkAndMakeApiCall();


       // this.cdRef.markForCheck();
      })
    }

    ngOnChanges(changes: SimpleChanges) {
      // Whenever inputData changes, check if both data are available
      if (changes['configAnalysis']) {
        console.log(" from  input changes data ")
        this.checkAndMakeApiCall();
      }
    }

    checkAndMakeApiCall() {
      if (this.configAnalysis && this.weightObj) {
        // Both input data and observable data are available
        console.log('Both data are ready. Making API call...');
        this.makeApiCall();
      }
    }
    makeApiCall() {
      console.log('API Call with:', { inputData: this.configAnalysis, observableData: this.weightObj });

      // Simulating an API call
      this.cdRef.markForCheck();
    const request=   {
        title: this.configAnalysis.name,
        body: this.weightObj.name,
        userId: this.configAnalysis.order + '-'+  this.configAnalysis.view,
      }
      this.ngForService.callUserService(request,true).subscribe();
    }

    handleUpdate()
    {
      this.localData = this.localData+1;
    }

  }
