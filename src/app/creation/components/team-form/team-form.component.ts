import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ColorEvent } from 'ngx-color';
import { TForm } from 'Shared/classes/form';
import { Team } from 'Shared/classes/team';
import { AvatarStyle, AVATAR_STYLES } from 'Shared/classes/avatar';

type TeamModel = {
  name: string;
  color: string;
  members: FormArray;
};

@Component({
  selector: 'cc-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.scss'],
})
export class TeamFormComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() colorState: string = '#fff';

  form: TForm<TeamModel> | undefined;
  avatarName: string = 'mike';
  memberControlIndex: number = 0;
  avatarStyles = AVATAR_STYLES;

  @Output() colorChanged: EventEmitter<string> = new EventEmitter();
  @Output() didSubmit: EventEmitter<Team> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  /**
   * Construct form following team model
   * @returns TForm<TeamModel>
   */
  constructForm(): TForm<TeamModel> {
    return this.formBuilder.group({
      name: ['', Validators.required],
      avatarStyle: [this.avatarStyles[0], Validators.required],
      color: ['', Validators.required],
      members: this.formBuilder.array([this.formBuilder.control('', Validators.required)]),
    }) as TForm<TeamModel>;
  }

  get name(): AbstractControl {
    return this.form?.get('name') as AbstractControl;
  }

  /**
   * Get members
   */
  get members(): FormArray {
    return this.form?.get('members') as FormArray;
  }

  /**
   * Get color
   */
  get color(): AbstractControl {
    return this.form?.get('color') as AbstractControl;
  }

  /**
   * Get avatarStyle
   */
  get avatarStyle(): AbstractControl {
    return this.form?.get('avatarStyle') as AbstractControl;
  }

  /**
   * Get and record member form control index
   * @param i
   */
  onMemberFocus(i: number): void {
    this.memberControlIndex = i;
  }

  /**
   * Add member to formArray
   */
  addMember(): void {
    this.members.push(this.formBuilder.control('', Validators.required));
  }

  /**
   * Remove latest member from formArray
   */
  removeMember(): void {
    this.members.removeAt(this.members.length - 1);
  }

  changeComplete(event: ColorEvent): void {
    this.color.setValue(event.color.hex);
    this.colorChanged.emit(event.color.hex);
  }

  /**
   * Submit form
   */
  onSubmit(): void {
    if (this.form?.invalid) {
      return;
    }

    const members = this.members.controls.map((m) => m.value as string);
    const team = new Team(this.name.value as string, this.color.value as string, members);
    team.avatarStyle = this.avatarStyle.value as AvatarStyle;

    this.didSubmit.emit(team);
  }

  /**
   * On init
   */
  ngOnInit(): void {
    this.form = this.constructForm();

    this.color.setValue(this.colorState);
    this.color.markAsTouched();

    // For displaying avatar, name is based off last changed member name
    this.members.valueChanges.subscribe(
      (m: string[]) => (this.avatarName = m[this.memberControlIndex]),
    );
  }
}
