
import { Component, OnInit } from '@angular/core';
import { HttpsToDoService } from '../../https/services/https.todos-service';
import { filter, map, Subject, switchMap } from 'rxjs';

type ConfgiType = {
  id: number,
  name: string
}
type WeightType = {
  id: number,
  name: string
}

@Component({
  selector: 'rxjs-research-cond-call',
  templateUrl: './rxjs-research-cond-call.html',
  styleUrls: ['./rxjs-research-cond-call.scss'],
})
export class RxjsResearchCondCall implements OnInit {

  config: Subject<ConfgiType> = new Subject<WeightType>();
  weights: Subject<WeightType> = new Subject<WeightType>();

  constructor(private service: HttpsToDoService) { }

  handleChangeConfigData() {
    const random = Math.ceil(Math.random() * 10);
    this.config.next({ id: random, name: 'config' + random });
  }

  handleMatchData() {
    const random = 5;
    this.config.next({ id: random, name: 'config' + random });
    this.weights.next({ id: random, name: 'weight' + random });
  }

  handleChangeWeightData() {
    const randomW = Math.ceil(Math.random() * 10);
    this.weights.next({ id: randomW, name: 'weight' + randomW });
  }



  ngOnInit(): void {
    //  in this case config will response for trigger the flow first... and then followed by weights
    // then service call, no other order that's what matter here
    // if we want  something like  order not matter for weights and config then we can do
    //  combine latest  like operatore
    this.config.pipe(
      switchMap((configResponse: ConfgiType) => {
        console.log('configResponse', configResponse);
        return this.weights.pipe(map((weightResponse: WeightType) => {
          console.log("weightResponse", weightResponse);
          return { configResponse, weightResponse }
        }))
      }),
      filter(({ configResponse, weightResponse }) => {

        return !(configResponse.id === weightResponse.id)
      }),
      switchMap(({ configResponse, weightResponse }) => {
        return this.service.getUsersByServiceId(configResponse.id).pipe(

          map((userResponse) => {
            console.log("userResponse", userResponse);
            return { configResponse, weightResponse, userResponse }
          })

        )
      })
    ).subscribe(
      ({ configResponse, weightResponse, userResponse }) => {
        console.log(" all response Here For User ");
        console.log("configResponse", configResponse);
      }
    )

  }


}
