import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { IState } from "src/app/core/models/state";
import { ConstantsService } from "src/app/core/core.module";

@Component({
  selector: "app-helpline-form",
  templateUrl: "./helpline-form.component.html",
  styleUrls: ["./helpline-form.component.scss"]
})
export class HelplineFormComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() titleAlert: string;
  @Input() isStateSelectionSearchable: boolean = true;

  states: IState[];
  selectedState = this.formGroup ? this.formGroup.controls.state.value : "";

  constructor(private constantsService: ConstantsService) {}

  ngOnInit() {
    this.states = this.constantsService.getStates();
  }

  onStateChange(selectedState: string) {
    this.formGroup.controls.state.setValue(selectedState);
  }
}
